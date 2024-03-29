import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays || "") }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        {!cardInfo.isSvg ?
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
          :

          <svg xmlns="http://www.w3.org/2000/svg" width="175.985" height="30" viewBox="0 0 175.985 30">
            <g data-name="Gruppe 1397" fill="#fff">
              <g data-name="Gruppe 58">
                <path data-name="Pfad 25"
                  d="m24.035 16.429-1.6-1.6L11.567 25.69V3.955l6.68 6.666 6.667-6.652a14.823 14.823 0 1 0 0 21.707l-5.069-5.057Z"
                  transform="translate(-122.691 -35) translate(122.691 35)" />
                <path data-name="Rechteck 37" d="m29.357 21.553 6.648-6.649 1.597 1.597-6.649 6.649z"
                  transform="translate(-122.691 -35) translate(122.691 35)" />
                <path data-name="Rechteck 38" d="m23.495 20.634 5.803-5.802 1.596 1.596-5.802 5.803z"
                  transform="translate(-122.691 -35) translate(122.691 35)" />
              </g>
              <path data-name="Pfad 26"
                d="M295.908 61.722c-.929 0-1.231-.981-1.231-1.743s.355-1.713 1.253-1.713 1.158.991 1.158 1.713c0 .741-.261 1.743-1.18 1.743m.387-4.541a1.881 1.881 0 0 0-1.608.815h-.02v-3.143h-1.4v7.83h1.357v-.659h.02a1.966 1.966 0 0 0 1.65.783c1.649 0 2.254-1.357 2.254-2.829s-.6-2.8-2.254-2.8"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 27"
                d="M290.732 61.305a1.187 1.187 0 0 1-.98.481c-.5 0-.888-.2-.888-.657 0-.825.93-.93 1.556-.93h.606a1.779 1.779 0 0 1-.293 1.107m1.588.178c-.01-.4-.021-.8-.021-1.347v-.689c0-1.588-.679-2.267-2.317-2.267a4.814 4.814 0 0 0-1.87.407l.041 1.2a2.817 2.817 0 0 1 1.661-.584c.825 0 1.211.292 1.211 1.158h-.773a4.258 4.258 0 0 0-1.805.313 1.58 1.58 0 0 0-.918 1.536 1.715 1.715 0 0 0 1.879 1.6 1.918 1.918 0 0 0 1.659-.93h.021a6.393 6.393 0 0 0 .063.8h1.229a22.502 22.502 0 0 1-.063-1.2"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 28" d="M282.294 62.684h4.292v-1.149h-2.83v-6.139h-1.461Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 29"
                d="M279.154 57.379a6.45 6.45 0 0 0-1.523-.2c-1.1 0-2.109.512-2.109 1.67 0 1.942 2.432 1.222 2.432 2.277 0 .522-.563.657-.918.657a3.072 3.072 0 0 1-1.379-.355l-.083 1.148a6.3 6.3 0 0 0 1.588.229c1.138 0 2.254-.5 2.254-1.754 0-1.942-2.432-1.4-2.432-2.255 0-.459.449-.595.825-.595a3.428 3.428 0 0 1 1.253.229Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 30"
                d="M272.166 58.205c.783 0 1.1.584 1.14 1.262h-2.381a1.218 1.218 0 0 1 1.242-1.262m-1.242 2.224h3.717c0-1.88-.563-3.247-2.558-3.247-1.67 0-2.5 1.285-2.5 2.841a2.554 2.554 0 0 0 2.808 2.786 3.7 3.7 0 0 0 1.849-.427v-1.14a3.622 3.622 0 0 1-1.785.543 1.406 1.406 0 0 1-1.535-1.357"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 39" d="M267.219 54.989h1.399v1.336h-1.399z"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 40" d="M267.219 57.307h1.399v5.376h-1.399z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 31"
                d="M263.609 61.598c-.8 0-1.19-.9-1.19-1.629 0-.825.3-1.7 1.252-1.7.816 0 1.17.753 1.17 1.671 0 .9-.354 1.662-1.233 1.662m1.3-4.292v.731h-.021a1.788 1.788 0 0 0-1.649-.857c-1.609 0-2.277 1.494-2.277 2.789 0 1.44.606 2.714 2.193 2.714a1.921 1.921 0 0 0 1.67-.856h.021c0 .929-.074 2.088-1.618 2.088a4.027 4.027 0 0 1-1.566-.47l-.115 1.19a4.718 4.718 0 0 0 1.857.365 2.524 2.524 0 0 0 2.841-2.839v-4.859Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 32"
                d="M257.182 61.722c-1.065 0-1.347-.97-1.347-1.858a1.371 1.371 0 1 1 2.7 0c0 .9-.282 1.858-1.357 1.858m0-4.541a2.691 2.691 0 0 0-2.808 2.851 2.814 2.814 0 0 0 5.627 0 2.694 2.694 0 0 0-2.819-2.851"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 41" d="M251.985 54.853h1.399v7.83h-1.399z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 33"
                d="M248.193 61.722c-1.065 0-1.348-.97-1.348-1.858a1.371 1.371 0 1 1 2.705 0c0 .9-.282 1.858-1.357 1.858m0-4.541a2.691 2.691 0 0 0-2.809 2.851 2.814 2.814 0 0 0 5.628 0 2.694 2.694 0 0 0-2.819-2.851"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 34"
                d="M239.438 62.683h1.4v-2.63c0-.689.22-1.785 1.231-1.785.9 0 .909.887.909 1.546v2.869h1.4v-3.392c0-1.212-.553-2.11-1.827-2.11a2.009 2.009 0 0 0-1.764.856h-.021v-.73h-1.326Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 35"
                d="M233.496 62.696h1.4v-2.629c0-.689.22-1.785 1.231-1.785.9 0 .909.887.909 1.546v2.868h1.4v-3.39c0-1.212-.553-2.11-1.827-2.11a2 2 0 0 0-1.691.857h-.021v-3.184h-1.4Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 36"
                d="M232.485 57.359a4.554 4.554 0 0 0-1.357-.178 2.82 2.82 0 0 0 .052 5.627 4.6 4.6 0 0 0 1.4-.176l-.063-1.159a2.975 2.975 0 0 1-1.076.25c-.981 0-1.451-.762-1.451-1.754 0-1.012.554-1.7 1.42-1.7a2.115 2.115 0 0 1 .951.2Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 37"
                d="M225.095 58.205c.783 0 1.1.584 1.138 1.262h-2.378a1.219 1.219 0 0 1 1.244-1.262m-1.244 2.223h3.716c0-1.88-.562-3.247-2.558-3.247-1.67 0-2.5 1.285-2.5 2.841a2.554 2.554 0 0 0 2.808 2.786 3.7 3.7 0 0 0 1.849-.427v-1.139a3.623 3.623 0 0 1-1.785.543 1.407 1.407 0 0 1-1.535-1.357"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 38" d="M219.148 62.684h1.461v-6.14h2.089v-1.148h-5.638v1.148h2.089Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 39"
                d="M212.827 58.205c.783 0 1.1.584 1.138 1.262h-2.379a1.218 1.218 0 0 1 1.242-1.262m-1.242 2.224h3.717c0-1.88-.563-3.247-2.558-3.247-1.67 0-2.5 1.285-2.5 2.841a2.554 2.554 0 0 0 2.808 2.786 3.7 3.7 0 0 0 1.848-.427v-1.14a3.62 3.62 0 0 1-1.784.543 1.406 1.406 0 0 1-1.535-1.357"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 40"
                d="M206.61 62.684h1.577l1.984-5.376h-1.4l-1.29 3.915h-.021l-1.336-3.915h-1.5Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 42" d="M202.236 54.989h1.399v1.336h-1.399z"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 43" d="M202.236 57.307h1.399v5.376h-1.399z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 41"
                d="M198.596 61.065a1.581 1.581 0 0 0 1.7 1.743 3.71 3.71 0 0 0 1.033-.124l-.041-1.107a1.258 1.258 0 0 1-.637.145c-.533 0-.659-.428-.659-.887v-2.506h1.244v-1.023h-1.241v-1.524l-1.4.448v1.076h-1.034v1.023h1.034Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 42"
                d="M194.983 61.305a1.187 1.187 0 0 1-.981.481c-.5 0-.888-.2-.888-.657 0-.825.93-.93 1.556-.93h.605a1.778 1.778 0 0 1-.292 1.107m1.588.178c-.01-.4-.021-.8-.021-1.347v-.689c0-1.588-.679-2.267-2.319-2.267a4.812 4.812 0 0 0-1.868.407l.041 1.2a2.817 2.817 0 0 1 1.661-.584c.825 0 1.21.292 1.21 1.158h-.773a4.259 4.259 0 0 0-1.805.313 1.581 1.581 0 0 0-.92 1.536 1.716 1.716 0 0 0 1.879 1.6 1.918 1.918 0 0 0 1.661-.93h.02a6.429 6.429 0 0 0 .064.8h1.231a23.59 23.59 0 0 1-.062-1.2"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 43"
                d="M188.167 62.684h1.575l1.984-5.376h-1.4l-1.295 3.915h-.021l-1.336-3.915h-1.5Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 44"
                d="M183.337 61.722c-1.066 0-1.347-.97-1.347-1.858a1.371 1.371 0 1 1 2.7 0c0 .9-.282 1.858-1.357 1.858m0-4.541a2.691 2.691 0 0 0-2.808 2.851 2.814 2.814 0 0 0 5.627 0 2.694 2.694 0 0 0-2.819-2.851"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 45"
                d="M174.616 62.683h1.4v-2.63c0-.689.219-1.785 1.233-1.785.9 0 .908.887.908 1.546v2.869h1.4v-3.392c0-1.212-.554-2.11-1.827-2.11a2.012 2.012 0 0 0-1.765.856h-.02v-.73h-1.329Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 46"
                d="M168.729 62.683h1.4v-2.63c0-.689.219-1.785 1.233-1.785.9 0 .908.887.908 1.546v2.869h1.4v-3.392c0-1.212-.553-2.11-1.827-2.11a2.008 2.008 0 0 0-1.764.856h-.02v-.73h-1.326Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 44" d="M166.312 55.397h1.461v7.287h-1.461z"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 45" d="M248.971 37.558h2.821v14.063h-2.821z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 47" d="M257.924 39.774h-4.03v-2.215h10.88v2.215h-4.029V51.62h-2.821Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 48" d="M266.874 37.558h2.821v11.846h5.458v2.217h-8.279Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 49"
                d="M278.274 41.789a9.276 9.276 0 0 1 3.606-.786c3.164 0 4.474 1.31 4.474 4.373v1.329c0 1.047.018 1.835.038 2.6.021.786.063 1.512.122 2.316h-2.377a12.892 12.892 0 0 1-.122-1.55h-.042a3.7 3.7 0 0 1-3.2 1.793c-1.835 0-3.626-1.108-3.626-3.083a3.048 3.048 0 0 1 1.773-2.962 8.211 8.211 0 0 1 3.485-.6h1.491c0-1.672-.746-2.237-2.337-2.237a5.425 5.425 0 0 0-3.2 1.129Zm3.164 8.1a2.3 2.3 0 0 0 1.894-.927 3.453 3.453 0 0 0 .564-2.135h-1.169c-1.208 0-3 .2-3 1.793 0 .886.745 1.269 1.713 1.269"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 50"
                d="M288.483 36.51h2.7v6.065h.041a3.633 3.633 0 0 1 3.1-1.572c3.185 0 4.352 2.537 4.352 5.4 0 2.842-1.167 5.46-4.352 5.46a3.8 3.8 0 0 1-3.184-1.511h-.039v1.269h-2.619Zm5.1 13.257c1.773 0 2.276-1.933 2.276-3.365 0-1.39-.485-3.3-2.237-3.3-1.733 0-2.418 1.853-2.418 3.3 0 1.471.584 3.365 2.378 3.365"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 51"
                d="M180.972 44.132a5.432 5.432 0 0 1 3.205-1.129c1.6 0 2.341.564 2.341 2.239h-1.492a8.226 8.226 0 0 0-3.489.6 3.051 3.051 0 0 0-1.776 2.965c0 1.975 1.795 3.085 3.63 3.085a3.707 3.707 0 0 0 3.206-1.8h.04a13.018 13.018 0 0 0 .122 1.553h2.38c-.06-.807-.1-1.533-.122-2.319-.019-.768-.039-1.554-.039-2.6v-1.324c0-3.065-1.311-4.376-4.478-4.376a9.294 9.294 0 0 0-3.61.786Zm1.371 4.517c0-1.593 1.8-1.794 3-1.794h1.17a3.433 3.433 0 0 1-.566 2.136 2.29 2.29 0 0 1-1.894.929c-.969 0-1.715-.384-1.715-1.271"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 52"
                d="M191.096 51.67h2.7v-5.038c0-1.352.222-3.489 2.016-3.489 1.554 0 1.554 1.372 1.554 2.34v6.191h2.7v-5.042c0-1.352.222-3.489 2.016-3.489 1.552 0 1.552 1.372 1.552 2.34v6.191h2.7v-6.557c0-2.321-.726-4.075-3.285-4.075a3.557 3.557 0 0 0-3.247 1.835 3.032 3.032 0 0 0-3.058-1.835 3.66 3.66 0 0 0-3.088 1.69h-.041v-1.447h-2.52Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 53"
                d="M210.344 45.443a2.354 2.354 0 0 1 2.4-2.441c1.511 0 2.115 1.13 2.2 2.441Zm6.413 3.427a7.007 7.007 0 0 1-3.448 1.05 2.715 2.715 0 0 1-2.964-2.622h7.178c0-3.63-1.088-6.272-4.941-6.272-3.225 0-4.819 2.481-4.819 5.486 0 3.408 2 5.383 5.425 5.383a7.127 7.127 0 0 0 3.569-.826Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Rechteck 46" d="M219.564 36.595h2.701V51.72h-2.701z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 54"
                d="M237.59 48.527a3.055 3.055 0 0 0 3.288 3.367 7.131 7.131 0 0 0 2-.242l-.081-2.139a2.4 2.4 0 0 1-1.231.283c-1.028 0-1.271-.827-1.271-1.715v-4.84h2.4v-1.974h-2.4v-2.944l-2.7.866v2.078h-2v1.976h2Z"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 55"
                d="M229.599 40.976a5.466 5.466 0 1 0 5.466 5.466 5.466 5.466 0 0 0-5.466-5.466m0 2.182a3.284 3.284 0 1 1-3.284 3.283 3.287 3.287 0 0 1 3.284-3.283"
                transform="translate(-122.691 -35)" />
              <path data-name="Pfad 56"
                d="M175.908 48.273a4.7 4.7 0 1 1 .222-7.118l1.888-1.884a7.368 7.368 0 1 0-.228 10.9l-.039-.054Z"
                transform="translate(-122.691 -35)" />
            </g>
          </svg>
        }
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
