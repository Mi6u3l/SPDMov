// Getting the item type for the list
function getListItemType(name) {
    return"SP.Data." + name[0].toUpperCase() + name.substring(1) + "ListItem";
}

var createListItem = function (url, listname) {
      var item =
        {
            "__metadata": { "type": getListItemType(listname) },
            Title: "blabla"
        };
    return $.ajax({
        url: url + "/_api/Web/lists/GetByTitle('" + listname + "')/Items",
        type: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose"
 
        },
        data: JSON.stringify(item),
        success: function (data) {
            console(data); // Returns the newly created list item information
        },
        error: function (error) {
             alert(JSON.stringify(error));
        }
    });


 return false; 
}

var test = function () {
    createListItem('http://23.94.156.22:8090', 'Newsletter');
}

var subscribeNewsletter = function () {
    $('#frmSubscribeNewsletter').submit(function () {
        if($(this).valid()) {
            createListItem('http://23.94.156.22:8090', 'Newsletter');
        }
    });
    return false;
}



$(".nav li div").on("click", function () {
    $(".nav li div").removeClass("spdm_toplevel_active");
    $(this).addClass("spdm_toplevel_active");
   
});
