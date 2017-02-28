# BlocklyVHDL

BlocklyVHDL is a web-based, visual programming VHDL editor.  Users can drag
blocks together to build programs.  All code is free and open source.

**The project page is http://www.blocklyvhdl.com**

To use the demo with the uncompressed files, the closure-library from google 
must be installed as well, it can be downloaded from here.

**https://github.com/google/closure-library**

The closure-library has to be installed in the same directory as the 
blocklyvhdl directory:

./blocklyvhdl
./closure-library

Blocklyvhdl can be started by loading either compressed_index.html or 
playground_vhdl.html from directory ./demos in the browser.

The compressed_index.html can be used to make your designs in blocklyVHDL.
The playground_vhdl.html uses the source files directly and can be used for 
the development and upgrading of blocklyvhdl. The compressed_index.html uses 
the compiled version of the source files.

After the files are finished the source files can be compiled with the python file 
build.py generating the blocks_compressed.js and blockly_compressed.js.
Make sure you have python installed on your PC.
