'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');
var express = require('express');
var app = express();
var path = require("path");



exports.index = function(req, res) {
        res.sendFile(path.join(__dirname + '/home_layout.html'));
};

exports.buku= function(req, res) {
    connection.query('SELECT * FROM buku',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_buku = req.body.id_buku;
    var kode_buku = req.body.kode_buku;
    var judul_buku = req.body.judul_buku;
    var penulis_buku = req.body.penulis_buku;
    var penerbit_buku = req.body.penerbit_buku;
    var tahun_penerbit = req.body.tahun_penerbit;
    var stok = req.body.stok;
    
    
    connection.query('INSERT INTO `buku` VALUES (?,?,?,?,?,?,?)',
    [id_buku,kode_buku,judul_buku,penulis_buku,penerbit_buku,tahun_penerbit,stok], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Buku!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_buku = req.param.id_buku;
    connection.query('SELECT * FROM `buku` WHERE id_buku = ?',
    [id_buku], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_buku = req.body.id_buku;
    var kode_buku = req.body.kode_buku;
    var judul_buku = req.body.judul_buku;
    var penulis_buku = req.body.penulis_buku;
    var penerbit_buku = req.body.penerbit_buku;
    var tahun_penerbit = req.body.tahun_penerbit;
    var stok = req.body.stok;

    connection.query('UPDATE `buku` SET kode_buku=?,judul_buku=?,penulis_buku=?,penerbit_buku=?,tahun_penerbit=?,stok=? WHERE id_buku=?',
    [kode_buku,judul_buku,penulis_buku,penerbit_buku,tahun_penerbit,stok,id_buku],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Buku!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_buku = req.body.id_buku;
    connection.query('DELETE FROM `buku` WHERE id_buku=?',
    [id_buku], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Buku!", res)
        }
    });
};
