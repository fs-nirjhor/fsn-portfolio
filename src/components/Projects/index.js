import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Fullstack Website' ?
            <ToggleButton active value="Fullstack Website" onClick={() => setToggle('Fullstack Website')}>Fullstack Website's</ToggleButton>
            :
            <ToggleButton value="Fullstack Website" onClick={() => setToggle('Fullstack Website')}>Fullstack Website's</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend Website' ?
            <ToggleButton active value="Frontend Website" onClick={() => setToggle('Frontend Website')}>Frontend Website's</ToggleButton>
            :
            <ToggleButton value="Frontend Website" onClick={() => setToggle('Frontend Website')}>Frontend Website's</ToggleButton>
          }
          <Divider />
          {toggle === 'Tool' ?
            <ToggleButton active value="Tool" onClick={() => setToggle('Tool')}>Tools</ToggleButton>
            :
            <ToggleButton value="Tool" onClick={() => setToggle('Tool')}>Tools</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects