import userModel from "../models/userModel.js";
import transactionModel from "../models/transcationModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import rezorpay from 'rezorpay';

const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.json({success: false, message: 'Missing Details'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name, 
            email, 
            password : hashedPassword
        };

        const newUser = new userModel(userData);

        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.jWT_SECRET);

        res.json({success: true, token, user:{name: user.name}})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
        
    }

}


const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: 'User does not exits'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

            res.json({success: true, token, user:{name: user.name}})

        }else{
            return res.json({success: false, message: 'Invalid credentials'})
        }
          
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
        
    }
}


const userCredits = async (req, res) =>{
    try {
      
        // const user = await userModel.findById(userId)
        const user = await userModel.findById(req.userId);
        res.json({success: true, credits: user.creditBalance, user:{name: user.name}})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
        
    }
}

// const rezorpayInstance = new rezorpay({
//     key_id: process.env.RAZEORPAY_KEY_ID,
//     key_secret: process.env.RAZEORPAY_KEY_SECRET
// })


// const paymentRazorpay = async(req, res)=>{
//     try {
//         const {userId, planId} = req.body;

//         const userData = await userModel.findById(userId)

//         if(!userId || !planId){
//             return res.json({success:false , message: "Missing Details"})
//         }


//         let credits, plan, amount, date


//         switch(planId){
//             case 'Basic':
//                 plan: 'Basic'
//                 credits: 100
//                 amount : 10
                
//             case 'Advanced':
//                 plan: 'Advanced'
//                 credits: 500
//                 amount : 50
//                 break
//             case 'Bussicess':
//                 plan: 'Bussicess'
//                 credits: 5000
//                 amount : 50
//                 break

//             default:
//                 return res.json({success: false, message: 'Plan Not Found'})
//         }

//         date = date.now()

//         const transcationData ={
//             userId, plan, amount, credits, date
//         }

//         const newtransaction = await transactionModel.create(transcationData)


//         const options = {
//             amount : amount * 100, 
//             currency: process.env.CURRENCY,
//             receipt: newtransaction._id, 
//         }

//         await rezorpayInstance.orders.create(options, (error, order)=>{
//             if(error){
//                 console.log(error)
//                 return res.json({success: false, message: error})
//             }
//             res.json({success: true, order})

//         })
        
//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: error.message})
        
//     }
// }


export {registerUser, loginUser, userCredits }