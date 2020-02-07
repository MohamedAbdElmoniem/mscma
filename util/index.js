module.exports = {
    filterCitizenByAge: (citizens, start_age, end_age) => {
        let currentYear = new Date().getFullYear()
        let end_year = currentYear - parseInt(start_age) // 2020-20 = 2000
        let start_year = currentYear - parseInt(end_age) // 2020-40 = 1980
        let years = []
        // construct arrays of years between 1980 - 2000
        for (let i = start_year; i <= end_year; i++) {
            years.push(i)
        }
        citizens = citizens.filter((citizen, index) => years.includes(new Date(citizen.birth_date).getFullYear()))
        return citizens
    },
    streetPopulation: {
        path: "street",
        populate: {
            path: "area", model: "area",
            populate: {
                path: 'city', model: "city"
            }
        }
    },
    Authentication: (req, resp, next) => {
        // ( req token === backend token )
        if (req.body.token === req.session.id) {
            next();
        } else {
            resp.json({ message: 'not authenitcated' })
        }
    }
}