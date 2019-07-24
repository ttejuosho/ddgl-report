$(function() {
    console.log("App Loaded");
    type = ['primary', 'info', 'success', 'warning', 'danger'];
    survenaire = {
        showNotification: function(from, align, msg) {
            color = Math.floor((Math.random() * 4) + 1);

            $.notify({
                icon: "tim-icons icon-bell-55",
                message: msg

            }, {
                type: type[color],
                timer: 8000,
                placement: {
                    from: from,
                    align: align
                }
            });
        }
    };

    $("input[name='getId']").on('change', function() {
        $(this).val(this.checked ? true : false);
    });

    $("input[name='getInstructions']").on('change', function() {
        $('#surveyInstructionsInput').toggleClass('d-none');
    });

    $("input[name='optionType']").on('change', function() {
        $('.MultipleChoiceInput').val('');
        if ($(this).val() === 'Likert') {
            $(this).prop("checked", true);
            $('#LikertOptionDiv').addClass('d-none');
            $('#LikertMoreOptions').removeClass('d-none');
            $('#MultipleChoiceMoreOptions').addClass('d-none');
            $('#MultipleChoiceDiv').removeClass('d-none');
            $('input.LikertAgreement').prop("checked", true);
            $('.MultipleChoiceOption').prop("checked", false);
        } else if ($(this).val() === 'MultipleChoice') {
            $('input.LikertAgreement').prop("checked", false);
            $(this).prop("checked", true);
            $('#LikertOptionDiv').removeClass('d-none');
            $('#LikertMoreOptions').addClass('d-none');
            $('#MultipleChoiceMoreOptions').removeClass('d-none');

        } else if (!$(this).val().includes('Likert')) {
            $(this).prop("checked", true);
            $('.MultipleChoiceOption').prop("checked", false);
            $('#LikertOptionDiv').removeClass('d-none');
            $('#LikertMoreOptions').addClass('d-none');
            $('#MultipleChoiceDiv').removeClass('d-none');
            $('#MultipleChoiceMoreOptions').addClass('d-none');
            $('.MultipleChoiceOption1').removeAttr('name');
        }
    });

    //Check if radio button is checked
    $('#newQuestionForm').on('submit', () => {
        if ($('input[id=MultipleChoiceOption]:checked').length < 1) {
            $('#MultipleChoiceMoreOptions').remove();
        }
    });
    // Initialize Demo Charts
    demo.initDashboardPageCharts();
});