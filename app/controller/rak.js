'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');
var express = require('express');
var app = express();
var path = require("path");


exports.index = function(req, res) {
        res.sendFile('home.html');
};

exports.rak= function(req, res) {
    connection.query('SELECT * FROM rak',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_rak = req.body.id_rak;
    var nama_rak = req.body.nama_rak;
    var lokasi_rak = req.body.lokasi_rak;
    var id_buku = req.body.id_buku;

    
    connection.query('INSERT INTO `rak` VALUES (?,?,?,?)',
    [id_rak,nama_rak,lokasi_rak,id_buku], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Rak!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_rak = req.param.id_rak;
    connection.query('SELECT * FROM `rak` WHERE id_rak = ?',
    [id_rak], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_rak = req.body.id_rak;
    var nama_rak = req.body.nama_rak;
    var lokasi_rak = req.body.lokasi_rak;
    var id_buku = req.body.id_buku;

    connection.query('UPDATE `rak` SET nama_rak=?,lokasi_rak=?,id_buku=? WHERE id_rak=?',
    [nama_rak,lokasi_rak,id_buku,id_rak],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Rak!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_rak = req.body.id_rak;
    connection.query('DELETE FROM `rak` WHERE id_rak=?',
    [id_rak], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Rak!", res)
        }
    });
};
