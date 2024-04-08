const express = require('express');
const Booking = require('../models/booking');

const adduser= async(req,res)=>{
    try{
        const booking = await Booking.findAll();
        res.json({success:true,booking});
    }catch(error){
        console.error(error);
    }
}

const getuser = async(req,res)=>{
    try{
        const{name,phone,email}=req.body;
        const booking = await Booking.create({name, phone, email});
        res.status(201).json({success:true,booking});
    }catch (error){
        console.error(error);
    }
}

const userdelete = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);
        if (!booking) {
            return res.status(404).json({ success: false, error: 'Booking not found' });
        }
        await booking.destroy();
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}

module.exports={
    adduser,
    getuser,
    userdelete
}