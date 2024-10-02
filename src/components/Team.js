import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
    return (
        <div className="container mx-auto py-16 px-4 lg:px-20">
            <div className="text-center mb-12">
                <span className="text-gray-500 text-sm font-bold">TEAM</span>
                <h1 className="text-4xl font-bold mt-2" data-aos="fade-up" data-aos-delay="100">Our Team</h1>
                <p className="text-lg text-gray-700 mx-auto max-w-2xl mt-4" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact, the unification of the coherent software provides a strict control over the accomplishment of intended estimation.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div className="flex flex-col items-center" key={index} data-aos={member.aos} data-aos-delay={member.delay}>
                        <div className="bg-white items-center shadow-md overflow-hidden rounded-lg">
                            <div className="team-img">
                                <img src={require(`../images/team${index + 1}.png`)} alt="team-img" className="w-auto h-30 justify-center border-r" />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="my-2 text-xl font-semibold">{member.name}</h3>
                                <h6 className="text-gray-600 mb-4">{member.role}</h6>
                                <div className="flex justify-center space-x-4">
                                    {member.socials.map((social, idx) => (
                                        <a href={social.link} key={idx} className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-2xl">
                                            {getIcon(social.icon)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getIcon = (iconName) => {
    switch (iconName) {
        case 'facebook':
            return <FaFacebook />;
        case 'instagram':
            return <FaInstagram />;
        case 'twitter-x':
            return <FaTwitter />;
        case 'linkedin':
            return <FaLinkedin />;
        default:
            return null;
    }
};

const teamMembers = [
    {
        name: 'Bodih Dgmas',
        role: 'Front-End Developer',
        aos: 'fade-right',
        delay: 200,
        socials: [
            { icon: 'facebook', link: '#' },
            { icon: 'instagram', link: '#' },
            { icon: 'twitter-x', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Ahmad Errami',
        role: 'Back-End Developer',
        aos: 'fade-up',
        delay: 250,
        socials: [
            { icon: 'facebook', link: '#' },
            { icon: 'instagram', link: '#' },
            { icon: 'twitter-x', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'John Smith',
        role: 'Web Designer',
        aos: 'fade-down',
        delay: 300,
        socials: [
            { icon: 'facebook', link: '#' },
            { icon: 'instagram', link: '#' },
            { icon: 'twitter-x', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Satoshi Nakamoto',
        role: 'CEO Founder',
        aos: 'fade-left',
        delay: 200,
        socials: [
            { icon: 'facebook', link: '#' },
            { icon: 'instagram', link: '#' },
            { icon: 'twitter-x', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    }
];

export default TeamSection;
