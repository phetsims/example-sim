Put image files in this directory. Each image must have an entry in license.json.
If this directory has subdirectories, each subdirectory mut have its own license.json file.

In license.json, each line consists of the image file name, followed by one or more of the following fields:

  source - where you found the resource (organization, URL, etc.)
  author - person or organization that created the resource
  license - the name of license (see PhetRuleSet.java for a list of recognized licenses)
  licensefile - file that contains the actual license text
  notes - any misc notes that you want to include