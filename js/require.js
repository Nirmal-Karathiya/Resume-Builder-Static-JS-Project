$(document).ready(function () {
    var firstname_check = true;
    var lastname_check = true;
    var image_check = true;
    var gender_check = true;
    var mobile_check = true;
    var email_check = true;
    var address_check = true;
    var experience_check = true;
    var skills_check = true;
    var language_check = true;


    // jquery keyup for validation 

    $('#firstname').keyup(function () {
        for_firstname();
    });

    $('#lastname').keyup(function () {
        for_lastname();
    });

    $('#image').change(function () {
        for_image();
    });

    $('input[name="gender"]').change(function () {
        for_gender();
    });

    $('#mobile').keyup(function () {
        for_mobile();
    });

    $('#email').keyup(function () {
        for_email();
    });

    $('#address').keyup(function () {
        for_address();
    });

    $('#experience').keyup(function () {
        for_experience();
    });

    $('input[name="skills"]').change(function () {
        for_skills();
    });

    $('#language').change(function () {
        for_language();
    });



    // functions for validation 

    function for_firstname() {
        var firstname_val = $('#firstname').val();
        if (firstname_val.length == "" || !/^\S+$/.test(firstname_val)) {
            $('#firstname_err').text('** This field is required and spaces are not allowed !');
            $('#firstname_err').focus();
            firstname_check = false;
            return false;
        } else if (firstname_val.length < 2 || firstname_val.length > 20) {
            $('#firstname_err').text('** Firstname must be in 2 to 20 !');
            $('#firstname_err').focus();
            firstname_check = false;
            return false;
        } else {
            $('#firstname_err').text("");
        }
    }

    function for_lastname() {
        var lastname_val = $('#lastname').val();
        if (lastname_val.length == "" || !/^\S+$/.test(lastname_val)) {
            $('#lastname_err').text('** This field is required and spaces are not allowed !');
            $('#lastname_err').focus();
            lastname_check = false;
            return false;
        } else if (lastname_val.length < 2 || lastname_val.length > 20) {
            $('#lastname_err').text('** Lastname must be in 2 to 20 !');
            $('#lastname_err').focus();
            lastname_check = false;
            return false;
        } else {
            $('#lastname_err').text("");
        }
    }

    function for_image() {
        var image_val = $('#image').val();
        if (image_val.length == "") {
            $('#image_err').text("** This field is required !")
            $('#image_err').focus();
            image_check = false;
            return false;
        }
        else {
            $('#image_err').text("");
        }
    }

    function for_gender() {
        var gender_val = $('input[name="gender"]:checked').length > 0;
        if (!gender_val) {
            $('#gender_err').text('** Please select your gender !');
            $('#gender_err').focus();
            gender_check = false;
            return false;
        } else {
            $('#gender_err').text("");
        }
    }

    function for_mobile() {
        var mobile_val = $('#mobile').val();
        if (mobile_val.length == "") {
            $('#mobile_err').html('** This field is required !');
            $('#mobile_err').focus();
            mobile_check = false;
            return false;
        } else if (!/^(?:\+?91)?[789]\d{9}$/.test(mobile_val)) {
            $('#mobile_err').html('** Enter valid Phone number !');
            $('#mobile_err').focus();
            mobile_check = false;
            return false;
        } else {
            $('#mobile_err').text("");
        }
    }

    function for_email() {
        var email_val = $('#email').val();
        if (email_val.length == "") {
            $('#email_err').text('** This field is required !');
            $('#email_err').focus();
            email_check = false;
            return false;
        } else if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email_val)) {
            $('#email_err').text('** Enter valid email address !');
            $('#email_err').focus();
            email_check = false;
            return false;
        } else {
            $('#email_err').text("");
        }
    }

    function for_address() {
        var address_val = $('#address').val();
        if (address_val.length == "") {
            $('#address_err').text('** This field is required !');
            $('#address_err').focus();
            address_check = false;
            return false;
        } else if (address_val.length < 5 || address_val.length > 200) {
            $('#address_err').text('** Address must be in 5 to 200 !');
            $('#address_err').focus();
            address_check = false;
            return false;
        } else {
            $('#address_err').text("");
        }
    }

    function for_experience() {
        var experience_val = $('#experience').val();
        if (experience_val.length == "") {
            $('#experience_err').text('** This field is required !');
            $('#experience_err').focus();
            experience_check = false;
            return false;
        } else if (experience_val.length < 10 || experience_val.length > 200) {
            $('#experience_err').text('** Address must be in 10 to 200 !');
            $('#experience_err').focus();
            experience_check = false;
            return false;
        } else {
            $('#experience_err').text("");
        }
    }

    function for_skills() {
        var skills_val = $('input[name="skills"]:checked').length > 0;
        if (!skills_val) {
            $('#skills_err').text('** Please at least one skills !');
            $('#skills_err').focus();
            skills_check = false;
            return false;
        }
        else {
            $('#skills_err').text("");
        }
    }

    function for_language() {
        var language_val = $("#language").val();
        if (language_val == "english" || language_val == "gujarati" || language_val == "hindi") {
            $('#language_err').text("");
        }
        else {
            $('#language_err').text('** Select at least one language !');
            $('#language_err').focus();
            language_check = false;
            return false;
        }
    }


    // take up function for resume 

    function takeup_resume(){
        $('.iscu_form_wrapper').slideUp(3000,function(){
            $('.back_button button').css("display","block");
        });

    }


    // on submit validation 

    $('#submit').click(function (e) {
        e.preventDefault();

        $('.loader-wrapper').css("display", "flex")
        setTimeout(() => {
            $('.loader-wrapper').css("display", "none");

            firstname_check = true;
            lastname_check = true;
            image_check = true;
            gender_check = true;
            mobile_check = true;
            email_check = true;
            address_check = true;
            experience_check = true;
            skills_check = true;
            language_check = true;

            for_firstname();
            for_lastname();
            for_image();
            for_gender();
            for_mobile();
            for_email();
            for_address();
            for_experience();
            for_skills();
            for_language();

            if ((firstname_check == true) && (lastname_check == true) && (image_check == true) && (gender_check == true) && (mobile_check == true) && (email_check == true) && (address_check == true) && (experience_check == true) && (skills_check == true) && (language_check == true)) {

                var firstname_val = $('#firstname').val();
                var lastname_val = $('#lastname').val();
                var image_val = $('#image').val();
                var gender_val = $('#gender').val();
                var mobile_val = $('#mobile').val();
                var email_val = $('#email').val();
                var address_val = $('#address').val();
                var experience_val = $('#experience').val();
                var language_val = $('#language').val()

                var skills_val = [];
                $('input[name="skills"]:checked').each(function (i) {
                    skills_val.push($(this).val());
                });
                var val = "";
                for (var a of skills_val) {
                    val += '<li>' + a + '</li>';
                }
                $('#skills_val').html(val);

                var image = $('#image')[0].files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image_val').attr('src', e.target.result);
                }
                reader.readAsDataURL(image);

                $('#firstname_val').text(firstname_val);
                $('#lastname_val').text(lastname_val);
                $('#gender_val').text(gender_val);
                $('#mobile_val').text(mobile_val);
                $('#email_val').text(email_val);
                $('#address_val').text(address_val);
                $('#experience_val').text(experience_val);
                $('#language_val').html('<li>' + language_val + '</li>')

                takeup_resume();
                
                return true;
            }
            else {
                return false;
            }
        }, 1000);


    })
});