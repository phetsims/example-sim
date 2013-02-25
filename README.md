example-sim
===========

Example demonstrating the structure of a simulation repository,
use of Git submodules, formatting conventions, and code documentation.

package.json:
(JSON doesn't support comments, so here's the description.)
This file is used to give information to npm that allows it to identify the project as well as handle
the project's dependencies. It can also contain other metadata such as a project description,
the version of the project in a particular distribution, license information, even configuration
data - all of which can be vital to both npm and to the end users of the package.
Running 'npm install' in the same folder as a package.json file will install the correct version
of each dependency listed therein.
