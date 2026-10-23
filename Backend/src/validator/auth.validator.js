import {body, validationResult} from "express-validator"


function validateRequest(req,res,next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}




export const validateRegisterUser=[
   body("email").isEmail().withMessage("Invalid email format"),

   body("contact")
   .notEmpty().withMessage("Contact is required")
   .matches(/^(\+91[- ]?)?[6-9]\d{9}$/).withMessage("contact must be a 10 digit no"),

   body("password")
   .isLength({min:6}) .withMessage("Password must be atleast 6 character long"),
   matches(/[A-Z]/).withMessage("Password must contain at least one capital letter"),

   body("fullname")
   .notEmpty().withMessage("Full name is required")
   .islength({min:3}).withMessage("Full name must be at least 3 cahracter"),

   validateRequest

]