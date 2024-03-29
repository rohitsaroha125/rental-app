// const https = require('https')
const Location = require('../models/locations')
const handleFactory = require('./handleFactory')

const locationsControllers = {}

// tourControllers.getTours = async (req, res, next) => {
//   try {
//     //execute query
//     const toursData = new APIFeature(Tour, req.query)
//       .filter()
//       .sort()
//       .fields()
//       .paginate()
//     const tours = await toursData.query

//     res.status(200).json({
//       status: true,
//       total: tours.length,
//       data: tours,
//     })
//   } catch (err) {
//     next(new AppError('Records not found', 404, err))
//   }
// }

locationsControllers.getLocations = handleFactory.getDocs(Location)
locationsControllers.createLocation = handleFactory.createDoc(Location)

// tourControllers.addTours = async (req, response) => {
//   const url = 'https://www.natours.dev/api/v1/tours'

//   response.setHeader('Content-Type', 'text/html')
//   let flag = 0
//   https
//     .get(url, (res) => {
//       let data = ''
//       res.on('data', (chunk) => {
//         data += chunk
//       })
//       res.on('end', async () => {
//         data = JSON.parse(data)
//         const apiData = data.data.data
//         await apiData.forEach(async (item) => {
//           try {
//             const dbData = {
//               name: item.name,
//               ratingsAverage: item.ratingsAverage,
//               ratingsQuantity: item.ratingsQuantity,
//               durations: item.durations,
//               maxGroupSize: item.maxGroupSize,
//               difficulty: item.difficulty,
//               price: item.price,
//               priceDiscount: item.priceDiscount,
//               summary: item.summary,
//               description: item.description,
//               imageCover: item.imageCover,
//               images: item.images,
//               startDates: item.startDates,
//             }
//             await Tour.create(dbData)
//           } catch (err) {
//             console.log('error is ', err.message)
//             response.write('Error occured', err.message)
//             flag = 1
//           }
//         })
//         if (flag === 0) {
//           response.status(201).json({
//             status: true,
//             message: 'All data added',
//           })
//         } else {
//           response.end()
//         }
//       })
//     })
//     .on('error', (err) => {
//       console.log(err.message)
//       response.status(400).json({
//         status: false,
//         message: 'some issue occured',
//       })
//     })

//   //   res.json({
//   //     data,
//   //   })
// }

module.exports = locationsControllers
