window.onload = function() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            createProjects(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET","https://api.github.com/users/remremz/repos?type=all&sort=updated",true);
    xmlhttp.send();

    if (document.location.search && document.location.search.indexOf('private') > -1) {
        var showPrivate = document.createElement('style');
        showPrivate.innerText = ".post.private { display: block; }";
        document.head.appendChild(showPrivate);
    }
};

function createProjects(rawData) {
    if (!rawData) return;

    var data = JSON.parse(rawData),
        githubProjects = document.getElementById('githubProjects');

    for (repo in data) {
        var el = createProjectContainer(data[repo]);
        githubProjects.appendChild(el);
    }
}

function createProjectContainer(repo) {
    var el = document.createElement('div');
    el.className = "pure-u-1 pure-u-md-1-2 pure-u-lg-1-4";
    el.innerHTML += ('<h4><a href="' + repo.html_url + '">' + repo.name + '</a></h4>');
    return el;
}