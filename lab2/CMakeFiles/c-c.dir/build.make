# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.5

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/kane/lab2

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/kane/lab2

# Include any dependencies generated for this target.
include CMakeFiles/c-c.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/c-c.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/c-c.dir/flags.make

CMakeFiles/c-c.dir/cminus_compiler.c.o: CMakeFiles/c-c.dir/flags.make
CMakeFiles/c-c.dir/cminus_compiler.c.o: cminus_compiler.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/kane/lab2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/c-c.dir/cminus_compiler.c.o"
	/usr/bin/cc  $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/c-c.dir/cminus_compiler.c.o   -c /home/kane/lab2/cminus_compiler.c

CMakeFiles/c-c.dir/cminus_compiler.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/c-c.dir/cminus_compiler.c.i"
	/usr/bin/cc  $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /home/kane/lab2/cminus_compiler.c > CMakeFiles/c-c.dir/cminus_compiler.c.i

CMakeFiles/c-c.dir/cminus_compiler.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/c-c.dir/cminus_compiler.c.s"
	/usr/bin/cc  $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /home/kane/lab2/cminus_compiler.c -o CMakeFiles/c-c.dir/cminus_compiler.c.s

CMakeFiles/c-c.dir/cminus_compiler.c.o.requires:

.PHONY : CMakeFiles/c-c.dir/cminus_compiler.c.o.requires

CMakeFiles/c-c.dir/cminus_compiler.c.o.provides: CMakeFiles/c-c.dir/cminus_compiler.c.o.requires
	$(MAKE) -f CMakeFiles/c-c.dir/build.make CMakeFiles/c-c.dir/cminus_compiler.c.o.provides.build
.PHONY : CMakeFiles/c-c.dir/cminus_compiler.c.o.provides

CMakeFiles/c-c.dir/cminus_compiler.c.o.provides.build: CMakeFiles/c-c.dir/cminus_compiler.c.o


# Object files for target c-c
c__c_OBJECTS = \
"CMakeFiles/c-c.dir/cminus_compiler.c.o"

# External object files for target c-c
c__c_EXTERNAL_OBJECTS =

c-c: CMakeFiles/c-c.dir/cminus_compiler.c.o
c-c: CMakeFiles/c-c.dir/build.make
c-c: lib/liblex.a
c-c: lib/libsyntax.a
c-c: lib/liblex.a
c-c: lib/libcommon.a
c-c: lib/libsyntax_tree.a
c-c: CMakeFiles/c-c.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/kane/lab2/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking C executable c-c"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/c-c.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/c-c.dir/build: c-c

.PHONY : CMakeFiles/c-c.dir/build

CMakeFiles/c-c.dir/requires: CMakeFiles/c-c.dir/cminus_compiler.c.o.requires

.PHONY : CMakeFiles/c-c.dir/requires

CMakeFiles/c-c.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/c-c.dir/cmake_clean.cmake
.PHONY : CMakeFiles/c-c.dir/clean

CMakeFiles/c-c.dir/depend:
	cd /home/kane/lab2 && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/kane/lab2 /home/kane/lab2 /home/kane/lab2 /home/kane/lab2 /home/kane/lab2/CMakeFiles/c-c.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/c-c.dir/depend

