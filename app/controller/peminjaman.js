'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');
var express = require('express');
var app = express();
var path = require("path");


exports.index = function(req, res) {
        res.sendFile('home.html');
};

exports.peminjaman= function(req, res) {
    connection.query('SELECT * FROM peminjaman',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_peminjaman = req.body.id_peminjaman;
    var tanggal_pinjam = req.body.tanggal_pinjam;
    var tanggal_kembali = req.body.tanggal_kembali;
    var id_buku = req.body.id_buku;
    var id_anggota = req.body.id_anggota;
    var id_petugas = req.body.id_petugas;
    
    
    connection.query('INSERT INTO `peminjaman` VALUES (?,?,?,?,?,?)',
    [id_peminjaman,tanggal_pinjam,tanggal_kembali,id_buku,id_anggota,id_petugas], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Peminjaman!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_peminjaman = req.param.id_peminjaman;
    connection.query('SELECT * FROM `peminjaman` WHERE id_peminjaman = ?',
    [id_peminjaman], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_peminjaman = req.body.id_peminjaman;
    var tanggal_pinjam = req.body.tanggal_pinjam;
    var tanggal_kembali = req.body.tanggal_kembali;
    var id_buku = req.body.id_buku;
    var id_anggota = req.body.id_anggota;
    var id_petugas = req.body.id_petugas;

    connection.query('UPDATE `peminjaman` SET tanggal_pinjam=?,tanggal_kembali=?,id_buku=?,id_anggota=?,id_petugas=? WHERE id_peminjaman=?',
    [tanggal_pinjam,tanggal_kembali,id_buku,id_anggota,id_petugas,id_peminjaman],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Peminjaman!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_peminjaman = req.body.id_peminjaman;
    connection.query('DELETE FROM `peminjaman` WHERE id_peminjaman=?',
    [id_peminjaman], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Peminjaman!", res)
        }
    });
};
