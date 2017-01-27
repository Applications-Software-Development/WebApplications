[READ FIRST AND AFTER CREATE A NEW BRANCH :) ]

[STAGE 1] NodeJS trainning

Commit Stages for this Repo: [REVIEW]

software_development

Phases to commit:

1- Create a local branch "git checkout -b ", the "feature" should be in the following format: "sw_webapp_"feature"_vX"

2- Commit the changes with some description "git commit -m "my description""

3- Now send the branch using "git push origin sw_webapp_"feature"_vX"

Merge to master:

Now, the branch is visible, and another SW developer should review / approve the changes:

1- You can suggest changes, and the developer must create a new branch with a new .

2- If everything is OK you can merge the branch to the master using: "git pull sw_webapp_"feature"_v " in the master branch

Notes:

Git refusing to merge unrelated histories, so in this case use "--allow-unrelated-histories"

[RULES]

- If you have a generated output made by the code please create a .gitignore to exclude this files e.g. to exclude ".o" inside .gitignore write "*.o". This is to avoid to have changes after run the code.
- In case of error in packages is possible to add new using: npm install <package> (local installation). 