// script to create session_token on behalf of
// user on root domain.

// requires the following in GET ?session_token=
// and workspaceID=

// thie

// https://stackoverflow.com/a/5448635
function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
  var params = {};
  var prmarr = prmstr.split("&");
  for (var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}

var params = getSearchParameters();

if (!params.session_token) {
  document.getElementById("error").innerText = "no session_token";
} else {
  document.cookie = `session_token=${params.session_token}; path=/`;

  if (params.workspaceID) {
    window.location.replace(`/app/code?workspaceId=${params.workspaceID}`);
  } else {
    document.getElementById("error").innerText =
      "token added. no workspaceID specified";
  }
}
