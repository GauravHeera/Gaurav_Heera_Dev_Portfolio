

const Certificates = ({certificate}) => {
    return(
        <div className="certificate">
             <div className="certificate_img" style={{backgroundImage: `url('${certificate.img}')`}}></div>
             <div className="certificate_details">
                <h2>{certificate.topic}</h2>
                <p>{certificate.desc}</p>
             </div>
        </div>
    );
};

export default Certificates;