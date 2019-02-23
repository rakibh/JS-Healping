//display alert once per visit

/*
add a ID (id="myAlert") with HTML div 
add a style(style = "display:none") with HTML div 

<div id="myAlert" style="display:none" class="alert alert-warning alert-dismissible" role="alert">
    We use cookies to ensure that we give you the best experience on our website. By continuing to use our site, you consent to this use. To learn more go the <a href="privacy.html">Privacy page</a>. &nbsp;<span class="badge badge-primary accept" data-dismiss="alert">Accept</span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
*/


$(document).ready(function () {
    $(document).ready(function () {
        // If not 'Confirmed', show #myAlert
        if (sessionStorage.Alert !== 'Confirmed') {
            $('#myAlert').show();
        }
    });

    $('#myAlert .close').click(function () {
        // Set 'Alert' to 'Confirmed' when user click the close button
        sessionStorage.Alert = "Confirmed";
        $(this).closest('#myAlert').hide();
    });
});