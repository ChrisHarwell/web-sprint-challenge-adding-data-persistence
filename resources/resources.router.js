const express = require('express');

const {
   find,
   findById,
   addResource
} = require("./resources.model.js");

const router = express.Router();

router.get("/", async (req, res) => {
    find()
    .then(resource=> {
      res.json(resource);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get resource' });
    });
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    findById(id)
      .then((resource) => {
        if (resource) {
          res.json(resource);
        } else {
          res
            .status(404)
            .json({ message: "Could not find resource with given id." });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to get resources" });
      });
  });
  
  
  router.post("/", (req, res) => {
    const resourceData = req.body;
  
    addResource(resourceData)
      .then((resource) => {
        res.status(201).json(resource);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to create new resource" });
      });
  });
  
//   router.post("/:id/steps", (req, res) => {
//     const stepData = req.body;
//     const { id } = req.params;
  
//     Schemes.findById(id)
//       .then((scheme) => {
//         if (scheme) {
//           Schemes.addStep(stepData, id).then((step) => {
//             res.status(201).json(step);
//           });
//         } else {
//           res
//             .status(404)
//             .json({ message: "Could not find scheme with given id." });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json({ message: "Failed to create new step" });
//       });
//   });
  
//   router.put("/:id", (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
  
//     Schemes.findById(id)
//       .then((scheme) => {
//         if (scheme) {
//           Schemes.update(changes, id).then((updatedScheme) => {
//             res.json(updatedScheme);
//           });
//         } else {
//           res
//             .status(404)
//             .json({ message: "Could not find scheme with given id" });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json({ message: "Failed to update scheme" });
//       });
//   });
  
//   router.delete("/:id", (req, res) => {
//     const { id } = req.params;
  
//     Schemes.remove(id)
//       .then((deleted) => {
//         if (deleted) {
//           res.json({ removed: deleted });
//         } else {
//           res
//             .status(404)
//             .json({ message: "Could not find scheme with given id" });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json({ message: "Failed to delete scheme" });
//       });
//   });

module.exports = router;