'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');
var express = require('express');
var app = express();
var path = require("path");


exports.index = function(req, res) {
        res.sendFile('home.html');
};

exports.anggota= function(req, res) {
    connection.query('SELECT * FROM anggota',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_anggota = req.body.id_anggota;
    var kode_anggota = req.body.kode_anggota;
    var nama_anggota = req.body.nama_anggota;
    var jk_anggota = req.body.jk_anggota;
    var jurusan_anggota = req.body.jurusan_anggota;  
    var no_telp_anggota = req.body.no_telp_anggota;  
    var alamat_anggota = req.body.alamat_anggota;  

    
    connection.query('INSERT INTO `anggota` VALUES (?,?,?,?,?,?,?)',
    [id_anggota,kode_anggota,nama_anggota,jk_anggota,jurusan_anggota,no_telp_anggota,alamat_anggota], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Anggota!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_anggota = req.param.id_anggota;
    connection.query('SELECT * FROM `anggota` WHERE id_anggota = ?',
    [id_anggota], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_anggota = req.body.id_anggota;
    var kode_anggota = req.body.kode_anggota;
    var nama_anggota = req.body.nama_anggota;
    var jk_anggota = req.body.jk_anggota;
    var jurusan_anggota = req.body.jurusan_anggota;  
    var no_telp_anggota = req.body.no_telp_anggota;  
    var alamat_anggota = req.body.alamat_anggota;   

    connection.query('UPDATE `anggota` SET kode_anggota=?,nama_anggota=?,jk_anggota=?,jurusan_anggota=?,no_telp_anggota=?,alamat_anggota=? WHERE id_anggota=?',
    [kode_anggota,nama_anggota,jk_anggota,jurusan_anggota,no_telp_anggota,alamat_anggota,id_anggota],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Anggota!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_anggota = req.body.id_anggota;
    connection.query('DELETE FROM `anggota` WHERE id_anggota=?',
    [id_anggota], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Anggota!", res)
        }
    });
};
