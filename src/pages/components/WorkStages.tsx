import React from 'react';
import WorkStageItem from './WorkStageItem';

const WorkStages = () => {
    const stages = [
        {
            number: 1,
            title: "Technical Requirements",
            description: "Development of technical requirements together with our team"
        },
        {
            number: 2,
            title: "UI/UX Design",
            description: "UX and UI prototype development"
        },
        {
            number: 3,
            title: "Development",
            description: "Mini App programming, Front-end/Back-end development"
        },
        {
            number: 4,
            title: "Server",
            description: "Server selection and configuration"
        },
        {
            number: 5,
            title: "Security & Testing",
            description: "Testing for bugs and cyber threats"
        },
        {
            number: 6,
            title: "Launch & Support",
            description: "Public launch and promotion"
        }
    ];

    return (
        <div className="rounded-xl">
            <h2
                className="text-white text-2xl font-bold mb-6"
            >
                Work Stages
            </h2>

            <div className="flex flex-col gap-6">
                {stages.map((stage, index) => (
                    <div
                        key={stage.number}
                    >
                        <WorkStageItem
                            number={stage.number}
                            title={stage.title}
                            description={stage.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkStages;