const router = require("express").Router();
let Staff = require("../models/Staff");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const nic = Number(req.body.nic);
    const address = req.body.address;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const land = Number(req.body.land);
    const mobile = Number(req.body.mobile);
    const category = req.body.category;

    const newStaff = new Staff({
        name,
        nic,
        address,
        age,
        gender,
        land,
        mobile,
        category,
    })

    newStaff.save().then(()=>{
        res.json("Staff member added successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Staff.find().then((staff)=>{
        res.json(staff)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put( async (req,res)=>{
    let userId = req.params.id;
    const {name,nic,address,age,gender,land,mobile,category,} = req.body;

    const updateStaff = {
        name,
        nic,
        address,
        age,
        gender,
        land,
        mobile,
        category,
    }

    const update = await Staff.findByIdAndUpdate(UserId, updateStaff)
    .then(()=>{
    res.status(200).send({status : "User updated successful!", user: update})
}).catch((err)=>{
    res.status(500).send({status : "Error in updating!", user: update})
})   
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Staff.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted successfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error in deleting!", user: update})
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await Staff.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User feched successfully!"})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error in fetching user",error :err.message})
    })
})
module.exports = router;



