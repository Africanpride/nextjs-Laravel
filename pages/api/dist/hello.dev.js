"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
  res.status(200).json({
    name: 'John Doe'
  });
}