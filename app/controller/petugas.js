'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');
var express = require('express');
var app = express();
var path = require("path");


exports.index = function(req, res) {
        res.sendFile('home.html');
};

exports.petugas= function(req, res) {
    connection.query('SELECT * FROM petugas',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_petugas = req.body.id_petugas;
    var nama_petugas = req.body.nama_petugas;
    var jabatan_petugas = req.body.jabatan_petugas;
    var no_telp_petugas = req.body.no_telp_petugas;
    var alamat_petugas = req.body.alamat_petugas;  
    
    connection.query('INSERT INTO `petugas` VALUES (?,?,?,?,?)',
    [id_petugas,nama_petugas,jabatan_petugas,no_telp_petugas,alamat_petugas], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Petugas!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_petugas = req.param.id_petugas;
    connection.query('SELECT * FROM `petugas` WHERE id_petugas = ?',
    [id_petugas], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_petugas = req.body.id_petugas;
    var nama_petugas = req.body.nama_petugas;
    var jabatan_petugas = req.body.jabatan_petugas;
    var no_telp_petugas = req.body.no_telp_petugas;
    var alamat_petugas = req.body.alamat_petugas;  

    connection.query('UPDATE `petugas` SET nama_petugas=?,jabatan_petugas=?,jabatan_petugas=?,alamat_petugas=? WHERE id_petugas=?',
    [nama_petugas,jabatan_petugas,jabatan_petugas,alamat_petugas,id_petugas],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Petugas!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_petugas = req.body.id_petugas;
    connection.query('DELETE FROM `petugas` WHERE id_petugas=?',
    [id_petugas], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Petugas!", res)
        }
    });
};
