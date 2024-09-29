import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="text-center mb-8">
                <span className="text-gray-600" data-aos="fade-up">team</span>
                <h1 className="text-4xl font-bold mt-2" data-aos="fade-up" data-aos-delay="100">our team</h1>
                <p className="text-lg text-gray-700 mx-auto max-w-xl" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact the unification of the coherent software provides a strict control over
                    The Accomplishment of Intended Estimation
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member, index) => (
                    <div className="flex flex-col items-center" key={index} data-aos={member.aos} data-aos-delay={member.delay}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="team-img">
                                <img src={require(`../images/team${index + 1}.png`)} alt="team-img" className="w-full h-48 object-cover" />
                            </div>
                            <h3 className="my-2 text-lg font-semibold">{member.name}</h3>
                            <h6 className="text-gray-600">{member.role}</h6>
                            <div className="flex space-x-4 mt-2">
                                {member.socials.map((social, index) => (
                                    <a href={social.link} key={index} className="text-gray-600 hover:text-gray-800">
                                        {getIcon(social.icon)}
                                    </a>
                                ))}
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
        name: 'bodih dgmas',
        role: 'front-end developer',
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
        name: 'ahmad errami',
        role: 'back-end developer',
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
        name: 'john smith',
        role: 'web designer',
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
        name: 'satoshi nakamoto',
        role: 'CEO founder',
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
