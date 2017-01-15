Bosco2

inspired by **libgdx** and **monogame**

libgdx api but wraps SDL rather than OpenGL
core is modeled more like monogame


ids.map<Person>(id => new Person(id)).filter(p => p.is_frobular).@foreach(p => {
    stdout.printf("%s is a frobular person\n", p.name);
    return true;
});

// This tweaked code from above now works, even if the line is a bit long.
foreach (Person p in
        Geary.traverse<Id>(ids).map<Person>(id => new Person(id)).filter(p => p.is_frobular))
    stdout.printf("%s is a frobular person\n", p.name);


// This is how we used to turn folder paths into a map in Geary...
Gee.HashMap<FolderPath, Geary.Folder> existing_folders
        = new Gee.HashMap<FolderPath, Geary.Folder>();
foreach (Geary.Folder folder in existing_list)
    existing_folders.set(folder.path, folder);

// Now look how nice it looks.
Gee.HashMap<FolderPath, Geary.Folder> existing_folders
        = Geary.traverse<Geary.Folder>(existing_list).to_hash_map<FolderPath>(f => f.path);


// Similarly, look at this old code to find matching Geary composer windows...
Gee.List<ComposerWindow> windows = new Gee.LinkedList<ComposerWindow>();
foreach (ComposerWindow w in composer_windows) {
    if (w.account.information == account)
        windows.add(w);
}

// Look how clean now!
Gee.List<ComposerWindow> windows = Geary.traverse<ComposerWindow>(composer_windows)
        .filter(w => w.account.information == account).to_linked_list();