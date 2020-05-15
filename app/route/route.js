'use strict';

module.exports = function(app) {
    //load controller
    var buku = require('../controller/buku');
    var anggota = require('../controller/anggota');
    var peminjaman = require('../controller/peminjaman');
    var pengembalian = require('../controller/pengembalian');
    var petugas = require('../controller/petugas');
    var rak = require('../controller/rak');
    
    //route buku
    app.route('/')
        .get(buku.index);
    app.route('/buku')
        .get(buku.buku);
    app.route('/buku/:id_buku')
        .get(buku.read);
    app.route('/buku')
        .post(buku.create);
    app.route('/buku')
        .put(buku.update);
    app.route('/buku')
        .delete(buku.delete); 
    //route anggota
    app.route('/')
        .get(anggota.index);
    app.route('/anggota')
        .get(anggota.anggota);
    app.route('/anggota/:id_anggota')
        .get(anggota.read);
    app.route('/anggota')
        .post(anggota.create);
    app.route('/anggota')
        .put(anggota.update);
    app.route('/anggota')
        .delete(anggota.delete); 
    //route peminjaman
    app.route('/')
        .get(peminjaman.index);
    app.route('/peminjaman')
        .get(peminjaman.peminjaman);
    app.route('/peminjaman/:id_peminjaman')
        .get(peminjaman.read);
    app.route('/peminjaman')
        .post(peminjaman.create);
    app.route('/peminjaman')
        .put(peminjaman.update);
    app.route('/peminjaman')
        .delete(peminjaman.delete); 
    //route pengembalian
    app.route('/')
        .get(pengembalian.index);
    app.route('/pengembalian')
        .get(pengembalian.pengembalian);
    app.route('/pengembalian/:id_pengembalian')
        .get(pengembalian.read);
    app.route('/pengembalian')
        .post(pengembalian.create);
    app.route('/pengembalian')
        .put(pengembalian.update);
    app.route('/pengembalian')
        .delete(pengembalian.delete); 
    //route petugas
    app.route('/')
        .get(petugas.index);
    app.route('/petugas')
        .get(petugas.petugas);
    app.route('/petugas/:id_petugas')
        .get(petugas.read);
    app.route('/petugas')
        .post(petugas.create);
    app.route('/petugas')
        .put(petugas.update);
    app.route('/petugas')
        .delete(petugas.delete); 
    //route rak
    app.route('/')
        .get(rak.index);
    app.route('/rak')
        .get(rak.rak);
    app.route('/rak/:id_rak')
        .get(rak.read);
    app.route('/rak')
        .post(rak.create);
    app.route('/rak')
        .put(rak.update);
    app.route('/rak')
        .delete(rak.delete); 
};
