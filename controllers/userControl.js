const student = require('../models/studentModel');
const Prof = require('../models/ProfModel');

const userControl = {

    register: async (req,res)=>{
        if((req.body.type).match("Professor")){
                const user = new Prof({
                   name : res.body.name,
                   mail: res.body.mail,
                   password: res.body.password
            })
            await user.save()
            return res.json({ msg: 'prof added successfuly!!', data: user })
        }
        else  if((req.body.type).match("Student")){
            const user = new student({
               name : res.body.name,
               mail: res.body.mail,
               password: res.body.password
        })
        await user.save()
        return res.json({ msg: 'Student added successfuly!!', data: user })
    }
        
    }

}
