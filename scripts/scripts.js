/* --- remove items --- */
$('.remove-btn button').click(function(){   // onclick remove btn
    removeItem(this);
});

function removeItem(removeBtn){
    var itemRow = $(removeBtn).parent().parent();
    itemRow.slideUp(200, function(){
        itemRow.remove();
    });
}
