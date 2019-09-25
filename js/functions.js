            /*global $*/
            var total1;
            var total2;
            var totalAmount;
            /* global number*/
            
              $(document).ready(function() {
                   
                $("button").on("click", gradeQuiz);
                
                    //functions
                    function isFormValid() {
                        let isValid = true;
                        if ($("#q1").val() == "") {
                            isValid = false;
                            $("#validationFdbk").html("Question 1 was not answered");
                        }
                        return isValid;
                    }
                    
                    function isFormValidT() {
                        let isValid = true;
                        if ($("#q2").val() == "") {
                            isValid = false;
                            $("#validationFdbk").html("Question 2 was not answered");
                        }
                        return isValid;
                    }
                    function gradeQuiz() {
                       
                       
                        $("#validationFdbk").html(""); //reset validation feedback
                       
                        if (!isFormValid()) {
                            return
                        }
                        if (!isFormValidT()) {
                            return
                        }
                
                        let q1Response = $("#q1").val();
                        let q2Response = $("#q2").val();
                        let price1 = 2;
                        let price2 = 3;
                       total1 = price1 * q1Response;
                       total2 = price2 * q2Response;
                       let taxes = (total1+total2)*.08;
                       totalAmount = (total1 + total2) + taxes;
                       $("#q1Feedback").html(`Total: $ ${total1}`);
                       $("#q2Feedback").html(`Total: $ ${total2}`);
                       $("#p1").html(`Taxes: $ ${taxes} Total Amount: $ ${totalAmount}`);
                       
                    }
                 
                });//click