'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');
var express = require('express');
var app = express();
var path = require("path");


exports.index = function(req, res) {
        res.sendFile('home.html');
};

exports.pengembalian= function(req, res) {
    connection.query('SELECT * FROM pengembalian',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_pengembalian = req.body.id_pengembalian;
    var tanggal_pengembalian = req.body.tanggal_pengembalian;
    var denda = req.body.denda;
    var id_buku = req.body.id_buku;
    var id_anggota = req.body.id_anggota;
    var id_petugas = req.body.id_petugas;    
    
    connection.query('INSERT INTO `pengembalian` VALUES (?,?,?,?,?,?)',
    [id_pengembalian,tanggal_pengembalian,denda,id_buku,id_anggota,id_petugas], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Pengembalian!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_pengembalian = req.param.id_pengembalian;
    connection.query('SELECT * FROM `pengembalian` WHERE id_pengembalian = ?',
    [id_pengembalian], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_pengembalian = req.body.id_pengembalian;
    var tanggal_pengembalian = req.body.tanggal_pengembalian;
    var denda = req.body.denda;
    var id_buku = req.body.id_buku;
    var id_anggota = req.body.id_anggota;
    var id_petugas = req.body.id_petugas; 

    connection.query('UPDATE `pengembalian` SET tanggal_pengembalian=?,denda=?,id_buku=?,id_anggota=?,id_petugas=? WHERE id_pengembalian=?',
    [tanggal_pengembalian,denda,id_buku,id_anggota,id_petugas,id_pengembalian],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Pengembalian!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_pengembalian = req.body.id_pengembalian;
    connection.query('DELETE FROM `pengembalian` WHERE id_pengembalian=?',
    [id_pengembalian], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Pengembalian!", res)
        }
    });
};
