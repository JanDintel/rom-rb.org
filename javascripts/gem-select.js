$(function(){var e={SQL:"rom-sql",MongoDB:"rom-mongo",YAML:"rom-yaml",CSV:"rom-csv"},t=$("#gem-install-code"),n=$("#db-select .value");$("#db-dropdown a").on("click",function(r){var i=$(r.target).text();n.text(i),t.text("$ gem install "+e[i]),r.preventDefault()})});