import "./project.css";


function ProjectCard({proName,proUrl,proDetail,link}) {
  const handleClick=()=>{
    window.open(link,"_blank")
  }

  return (
          <div className="project-card">
          <div className="project-img">
            <img src={proUrl}></img>
          </div>
          <p className="h-pro-name" onClick={handleClick}>{proDetail}</p>
         <strong className="project-detail">{proName}</strong>
        </div>
    
  )
}

export default ProjectCard
