const MyData = require('../model/userModel')

const userCtrl = {
    getdata: async (req, res) => {
        try {
            // const { distance, latlng, unit } = req.params;
            // const [lat, lng] = latlng.split(',');
            // if (!lat || !lng) {
            //   next(
            //     new AppError(
            //       `please provide latitude amd longitude in the form of lat,lng`,
            //       400
            //     )
            //   );
            // }
            // const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;

            // const data = await myData.find({
            //     yourfieldname: {
            //         $geoWithin: { $centerSphere: [[lng, lat], radius] }
            //     }
            // });
            const data = await MyData.find()
            res.json(data)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createdata: async (req, res) => {
        try {
            const { name, email } = req.body
            if (!email) return res.status(400).json({ msg: "Please field this section" })
            const same = await MyData.findOne({ email })
            if (same)
                return res.json({ msg: "Change Email Adderess" })

            const newData = new MyData({
                name, email
            })
            await newData.save()
            res.json({ msg: "Add SuccessFully" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }
    },
    deletedata: async (req, res) => {
        try {
            await MyData.findByIdAndDelete(req.params.id)
            res.json({ msg: "Delete Data SuccessFully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }
    },
    updatedata: async (req, res) => {
        try {
            const { name, email } = req.body

            await MyData.findByIdAndUpdate({ _id: req.params.id }, { name, email })
            res.json({ msg: "Update data SuccessFully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }
    },
}
module.exports = userCtrl