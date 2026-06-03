# Flatlander

Flatten nested directory trees into a single directory.

I have a series of directories that I need to move the contents of the directories into a single directory, I was unaware of any unix utility that would do it, so I quickly wrote this to handle it for me.

\*`-t` Target Directory: The directory that you want to move the files to
`-d` Dry Run: this will print the files to be moved and the location to move them to
`-s` Starting Directory: By default it's the directory you are running the application from, but you can specify it with this flag

Examples:

```
deno run index.ts -t /home/user/test
```

This wil move all files from the cwd/pwd to /home/user/test
The directory test will need to exist prior to this running

\* Denotes required
