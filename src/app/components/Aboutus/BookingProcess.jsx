'use client'
import React from 'react'
import './BookingStyle.css'
import { Container, Row, Col } from 'react-bootstrap'
import bookingicon from '../../Assets/homepageassets/bookingicon.png'
import Image from 'next/image'
import travelagent from '../../Assets/homepageassets/travelagent.png'
const BookingProcess = () => {
    const bookingProcess = [
        {
            id: 0,
            imageIcon: bookingicon,
            title: 'Best Prices',
            des: 'Amazing travel experiences are priceless. With a Best Price Guarantee on all tours, you always get the best deal.',
        },
        {
            id: 1,
            imageIcon: bookingicon,
            title: 'Wide Selection of Tours',
            des: 'Offering tours in 130+ countries and on all continents, allows you to easily find and book your favourite day tours and package tours.',
        },
        {
            id: 2,
            imageIcon: bookingicon,
            title: 'Qualified Tour Operators',
            des: 'We insist on a very high tour quality and therefore only work with qualified and professional tour companies.',
        },
        {
            id: 3,
            imageIcon: bookingicon,
            title: 'Professional Tour Guide',
            des: 'For all tours, you can make an enquiry directly with the tour operator, and get a customised tour offer.',
        },
        {
            id: 4,
            imageIcon: bookingicon,
            title: 'Fast Booking',
            des: 'Jovera Tourism is automatically offsetting the carbon footprint generated by all tour bookings, for online package tour booking platforms.',
        },
        {
            id: 5,
            imageIcon: bookingicon,
            title: 'Pesonalized Trips',
            des: 'Our local travel experts will design a trip that matches your unique interests and special requirements, booking everything.',
        },
    ]
    const travelAgentData = [
        {
            id: 0,
            travelagent: travelagent,
            name: 'Arlene McCoy',
            profession: 'Marketing'
        },
        {
            id: 1,
            travelagent: travelagent,
            name: 'Arlene McCoy',
            profession: 'Marketing'
        },
        {
            id: 2,
            travelagent: travelagent,
            name: 'Arlene McCoy',
            profession: 'Marketing'
        },
        {
            id: 3,
            travelagent: travelagent,
            name: 'Arlene McCoy',
            profession: 'Marketing'
        },
    ]
    return (
        <div className='booking_main_container' >
            <Container>
                <p className='bookwithus' >why book with us</p>
                <h1 className='booking_process' >Convenient and Easy Tour Booking Process</h1>
                <Row>
                    {bookingProcess.map((bookPlan, index) => (
                        <Col xs={12} sm={6} md={6} lg={4} key={index}>
                            <div className="booking-item">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className='mt-5'>
                                    <Image src={bookPlan.imageIcon} alt='image' fluid />
                                    <p className='titlebookplan mb-0' >{bookPlan.title}</p>
                                </div>
                                <p className='titlebookdes'>{bookPlan.des}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Travel Agent */}

                <div className='booking_agent_container' >
                    <p className='bookwithus' >Meet The Team</p>
                    <h1 className='booking_process' >Our Best Travel Agents</h1>
                </div>
                <Row>
                    {
                        travelAgentData.map((agent, index) => {
                            return (

                                <Col xs={12} sm={12} md={6} lg={3} className='travel_agent_conatiner'>
                                    <div>
                                        <Image src={agent.travelagent} alt='travelagent' className='agent_image' />
                                        <p className='agent_name' > {agent.name} </p>
                                        <p className='agent_profession'> {agent.profession} </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BookingProcess