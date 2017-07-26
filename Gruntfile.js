var timer = require("grunt-timer");
var shell = require('shelljs');


module.exports = function(grunt) {

    require('time-grunt')(grunt);
   //var prod = false;
    var destenv = grunt.option("env") || "dev";
    var destid = grunt.option("id") || "01";
    if (destid < 10)
        destid = '0' + destid;
    console.log("*********** Building system ", destid, " for ", destenv);

    
    var version = shell.exec('grep version package.json | cut -d":" -f2 | tr -d "\\""  | tr -d ","  | tr "\\n" " " | tr -d " " ', {
        'silent': false
    }).output
    var build = version; // + "." + buildid
    console.log('\n********* Generated build id: ' + build);

    var tmpBuildFolderNo = shell.exec('echo $RANDOM', { silent: false }).output;

    // Load S3 plugin
    //grunt.loadNpmTasks('grunt-aws');

    //Makes it look pretty on screen
    timer.init(grunt, {
        deferLogs: true,
        friendlyTime: true,
        color: "blue"
    });
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    // Static Webserver
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browser-sync');

    //Ensure we have the most up to date node modules
    grunt.loadNpmTasks('grunt-npm-install');
    grunt.loadNpmTasks('grunt-gitinfo');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('.aws.json'),


        // Declare constants for folders
        dirs: {
            build: 'build$<%= tmpBuildFolderNo %>',
            dist: 'dist',
            archive: 'pack',
            certs: 'certs',
            conf: 'conf',
            etc: 'etc',
            src: 'src',
            env: destenv,
            id: destid,
            rpmbuildid: '<%= pkg.version %>'
        },

        // Clean previous build components and folders
        clean: {
            build: {
                src: ['<%= dirs.build %>', '<%= dirs.dist %>', '<%= dirs.archive %>']
            },
            modules: {
                src: ['<%= dirs.build %>/node_modules/grunt*', '<%= dirs.build %>/node_modules/jshint*', '<%= dirs.build %>/node_modules/matchdep']
            },
            packages: {
                src: ['<%= dirs.build %>/*.rpm']
            }
        },

        //Minify images and graphics
        imagemin: { // Task
            dynamic: { // Another target
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: '<%= dirs.build %>/lib/plugins/c2bingo/', // Src matches are relative to this path
                    src: ['**/*.png'], // Actual patterns to match
                    dest: '<%= dirs.build %>/lib/plugins/c2bingo/' // Destination path prefix
                }]
            }
        },

        // Configure the copy task to move files from the development to build staging folders
        copy: {
            target: {
                options: {
                    mode: true,
                },
                files: [{
                        expand: true,
                        src: '**/*',
                        dest: '<%= dirs.build %>/lib',
                        cwd: 'src'
                    }, {
                        expand: true,
                        src: 'bin/**/*',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'conf/games/*',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'conf/**/*<%= dirs.env %>*',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: ['node_modules/**/*'],
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: ['reports/**/*'],
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'INSTALL',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'KEYS',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'LICENSE',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'NOTICE',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'README',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'CHANGELOG',
                        dest: '<%= dirs.build %>'
                    }, {
                        expand: true,
                        src: 'BUILD.MD',
                        dest: '<%= dirs.build %>'
                    }

                ]
            }
        },

        
        //Increase version number by one index
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%_<%= grunt.template.today("yyyy-mm-dd_HHMM") %>',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                //pushTo: 'origin <%= gitinfo.local.branch.current.name %>',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
            }
        },

        //Remove all console logs
        comments: {
            cmd: "for i in `find <%= dirs.build %>/lib/ -type d `; " +
                "do " +
                " [ -d $i/public/ ] && for j in `find $i/public/  -name '*.js' `; " +
                " do " +
                " sed '/^\\s+\\/\\//d' $j | sed '/console/d' | sed 's|/\\*|\\n&|g;s|*/|&\\n|g' | sed '/\\/\\*/,/*\\//d' > /tmp/${j##*\/}.bak; " +
                " if [ \"$?\" -eq 0 ]; then " +
                " mv  /tmp/${j##*\/}.bak $j; " +
                " fi " +
                " done " +
                " done "
        },


        //Comment out all server side Logger.debug statements
        "regex-replace": {
            logger: {
                src: ["<%= dirs.build %>/lib/**/*.js"],
                actions: [{
                    name: 'Logger',
                    search: '(^|\\s)Logger.debug',
                    replace: '//Logger.debug',
                    flags: 'g'
                }]
            },
            serverid: {
                src: ["<%= dirs.build %>/conf/config.<%= dirs.env %>.json"],
                actions: [{
                    name: 'ServerID',
                    search: '__SERVERID__',
                    replace: '<%= dirs.id %>',
                    flags: 'g'
                }]
            }
        },


        //Beautify the code to make it look nice when we present it to the front end
        //Disabling for the moment since we are now using a closure compiler and compressor
        //jsbeautifier: {
        //  beautify: {
        //    src: ['<%= dirs.build %>/lib/**/*.js'],
        //    options: {
        //      "indent_size": 4,
        //      "indent_char": " ",
        //      "indent_level": 0,
        //      "indent_with_tabs": true,
        //      "preserve_newlines": true,
        //      "max_preserve_newlines": 2,
        //      "jslint_happy": true,
        //      "brace_style": "collapse",
        //      "keep_array_indentation": false,
        //      "keep_function_indentation": false,
        //      "space_before_conditional": true,
        //      "break_chained_methods": false,
        //      "eval_code": false,
        //      "unescape_strings": false,
        //      "wrap_line_length": 0
        //    }
        //  }
        //},

        
        //Calculate the SHA1 for given submodules, perform code closure check and compression. Finally insert copyright header
        exec: {
            compile: {
                cmd: "for i in `find <%= dirs.build %>/lib/plugins -type d -depth 1`; " +
                    "do " +
                    "[ -d <%= dirs.build %>/lib/plugins/${i##*/}/public/js/ ] && for j in `find <%= dirs.build %>/lib/plugins/${i##*\/}/public/js  -name '*.js'  `; " +
                    "do " +
                    "cat copyright.txt > <%= dirs.build %>/lib/plugins/${i##*\/}/public/${j##*\/}; " +
                    "echo $j; echo <%= dirs.build %>/lib/plugins/${i##*/}/public/${j##*/}; " +
                    "java -jar bin/compiler.jar --language_in ECMASCRIPT5  " +
                    "   --js <%= dirs.build %>/lib/engine/public/js/sound-fallback.js  " +
                    " --js <%= dirs.build %>/lib/engine/public/js/sound.js  " +
                    "   --js  <%= dirs.build %>/lib/engine/public/js/controller.js  " +
                    "   --js  $j --js_output_file <%= dirs.build %>/lib/plugins/${i##*\/}/public/${j##*\/}; " +
                    //"mv <%= dirs.build %>/lib/plugins/${i##*\/}/public/${j##*\/} <%= dirs.build %>/lib/plugins/${i##*\/}/public/js/${j##*\/};"+
                    "done " +
                    "done"
            },
            csscompress: {
                cmd: "for i in `find <%= dirs.build %>/lib/plugins -type d -depth 1`; " +
                    "do " +
                    "[ -d <%= dirs.build %>/lib/plugins/${i##*/}/public/css/ ] && for j in `find <%= dirs.build %>/lib/plugins/${i##*\/}/public/css  -name '*.css'  `; " +
                    "do " +
                    "cat copyright.txt >  <%= dirs.build %>/lib/plugins/${i##*\/}/public/${j##*\/}; " +
                    "echo $j; " +
                    "java -jar bin/yuicompressor-2.4.8.jar " +
                    "   $j >> <%= dirs.build %>/lib/plugins/${i##*\/}/public/${j##*\/}; " +
                    //"mv <%= dirs.build %>/lib/plugins/${i##*\/}/public/${j##*\/} <%= dirs.build %>/lib/plugins/${i##*\/}/public/css/${j##*\/};"+
                    "done " +
                    "done"
            },
            pre_sha1: {
                cmd: "echo '{\n' > <%= dirs.build %>/VERSION.json ; grep \"version\" package.json  | sed 's/,//g' >> <%= dirs.build %>/VERSION.json "
            },
            sha1: {
                cmd: "cd <%= dirs.build %>; bin/runsha.sh >> VERSION.json; cd .."
            },
            post_sha1: {
                cmd: "echo '}\n' >> <%= dirs.build %>/VERSION.json"
            },
            hash: {
                cmd: "bin/hash"
            },
            removedevcode: {
                cmd: " [ \"<%= dirs.env %>\" !=  \"dev\" ] && ( for i in `find  <%= dirs.build %>/lib -name \"*.js\"`; do awk '/{BEGIN/,/END}/ {next} {print}' $i > $i.js.bak ;  mv $i.js.bak $i; done ) "
            }
        },



        
        // Some typical JSHint options and globals
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                reporter: require('jshint-stylish'),
                force: true
            },
            globals: {
                jQuery: true

            },
            build: ['<%= dirs.build %>/lib/**/*.js']

        },


        //Compress source code into archive file
        compress: {
            src: {
                options: {
                    archive: '<%= dirs.build %>/<%= pkg.name %>-<%= dirs.rpmbuildid %>.noarch.<%= dirs.env %>.src.zip',
                    mode: 'zip'
                },
                files: [{
                    src: '<%= dirs.src %>/**'
                }]
            },
            system: {
                options: {
                    archive: '<%= dirs.build %>/<%= pkg.name %>-<%= dirs.rpmbuildid %>.noarch.<%= dirs.env %>.system.tar',
                    mode: 'tar'
                },

                files: [{
                    expand: true,
                    cwd: '<%= dirs.build %>',
                    src: 'lib/**'
                }, {
                    expand: true,
                    cwd: '<%= dirs.build %>',
                    src: 'node_modules/**'
                }]
            }
        },

        
        //Package it all up in a nice tight RPM bundle
        easy_rpm: {
            options: {
                name: "<%= pkg.name %>",
                version: "<%= dirs.rpmbuildid %>",
                release: "<%= pkg.release %>",
                rpmDestination: "<%= dirs.build %>",
                buildArch: "noarch", //"x86_64",
                description: "<%= pkg.description %>",
                summary: "",
                license: "",
                vendor: 'RFC',
                group: 'Engineering',
                url: 'renofloorball.org',
                preInstallScript: [
                    " echo 'Ensure certified version is being installed' ",
                    " shasum /var/opt/respin/<%= pkg.name %>-<%= dirs.rpmbuildid %>-<%= pkg.release %>.noarch.rpm | cut -f1 -d' ' > /tmp/_installvalidation.sha",
                    " diff -y -q /var/opt/respin/INSTALL_SHA_CERTIFIED /tmp/_installvalidation.sha; test $? -ne 0 && { echo 'ROC install checksum mismatch during install' | tee /tmp/_installvalidation.sha; exit 1; } || echo 'ROC install checksum confirmed' "
                ],
                postInstallScript: [
                    " sudo rm -f /etc/environment ", " sudo ln -s /etc/environment.<%= dirs.env %> /etc/environment ",
                    " cd /var/opt/respin; sudo /var/opt/respin/bin/auditsha.sh > /var/opt/respin/INSTALL_SHA; sudo chmod 755 /var/opt/respin/INSTALL_SHA; sudo chown root:root /var/opt/respin/INSTALL_SHA"

                ],
                //requires : ["nodejs >= 0.10.22"],
                keepTemp: false
            },
            release: {
                files: [{
                        src: ["respin.crt", "respin.key"],
                        dest: "/etc/ssl",
                        mode: "755",
                        user: "respin",
                        group: "respin",
                        cwd: "<%= dirs.certs %>"
                    }, {
                        src: "roc.conf",
                        dest: "/etc/init",
                        cwd: "<%= dirs.etc %>",
                        mode: "755",
                        user: "respin",
                        group: "respin"
                    }, {
                        src: "admin.conf",
                        dest: "/etc/init",
                        mode: "755",
                        cwd: "<%= dirs.etc %>",
                        user: "respin",
                        group: "respin"
                    }, {
                        src: "environment.<%= dirs.env %>",
                        dest: "/etc",
                        mode: "755",
                        cwd: "<%= dirs.etc %>",
                        user: "respin",
                        group: "respin"

                    }, {
                        src: "**/*",
                        dest: "/var/opt/respin",
                        cwd: "<%= dirs.build %>",
                        mode: "755",
                        user: "respin",
                        group: "respin"
                    },

                ]
            }
        },




        browserSync: {
            dev: {
                bsFiles: {
                    src: ['css/*.css',
                        'js/*.js',
                        '*.html'
                    ]
                },
                options: {
                    server: {
                        baseDir: "src/www/"
                    }
                }
            }
        },


        s3: {
            options: {
                accessKeyId: "<%= aws.accessKeyId %>",
                secretAccessKey: "<%= aws.secretAccessKey %>",
                bucket: "<%= aws.bucket %>"
            },
            build: {
                cwd: "dist",
                src: "**"
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: "src/www",
                    keepalive: true
                }
            }
        }
    });

    // Default task(s).
    //grunt.registerTask("default", ["connect", "browserSync"]);


    //
    //For a production build we need to include the following line:
    //','removelogging',
    grunt.registerTask('default', 'Run all default tasks', function(n) {
        if (destenv === "prod" || destenv === "bmm") {
            grunt.task.run('clean:build', 'clean:packages', 'copy', 'regex-replace:serverid', 'clean:modules', 'regex-replace:logger', 'comments', 'imagemin', 'exec:compile', 'exec:csscompress', 'exec:pre_sha1', 'exec:sha1', 'exec:post_sha1', 'exec:hash', 'exec:removedevcode', 'easy_rpm', 'compress:system', 'compress:src');
        } else if (destenv === "qa") {
            grunt.task.run('clean:build', 'clean:packages', 'copy', 'regex-replace:serverid', 'clean:modules', 'regex-replace:logger', 'comments', 'imagemin', 'exec:compile', 'exec:csscompress', 'exec:pre_sha1', 'exec:sha1', 'exec:post_sha1', 'exec:hash', 'exec:removedevcode', 'easy_rpm', 'compress:system', 'compress:src');
        } else {
            grunt.task.run('clean:build', 'clean:packages', 'copy', 'regex-replace:serverid', 'clean:modules', 'imagemin', 'exec:compile', 'exec:csscompress', 'exec:pre_sha1', 'exec:sha1', 'exec:post_sha1', 'exec:hash', 'easy_rpm', 'compress:system', 'compress:src');
        }
        grunt.task.run('connect', 'browserSync')

    });

};
