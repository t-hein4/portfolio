import client from "@/lib/sanity-client";
import { SanityBlock } from "@/components/sanity-block";
import { CoverImage } from "@/components/cover-image";
import { query } from "@/lib/sanity-queries";
export default function AboutMe({ me }) {
  const {
    email,
    city,
    state,
    zip_code,
    country,
    about,
    phone,
    github,
    code_pen,
    cover_image,
    name,
  } = me;
  return (
    <div className="container mx-auto my-16 flex w-fit flex-col gap-16 xl:gap-24">
      <div className="flex flex-col items-center justify-center gap-x-16 gap-y-8 xl:flex-row">
        <div className="max-w-2xl shadow-lg shadow-black/30 grayscale">
          <CoverImage cover_image={cover_image} title={name} />
        </div>
        <div className="flex items-center justify-center px-4">
          <SanityBlock value={about} />
        </div>
      </div>
      <div className="grid w-fit grid-cols-12 justify-items-end gap-2 self-end px-4 text-right leading-relaxed xl:px-0">
        <div className="col-span-11">
          {city}, {state} {zip_code}, {country}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <div className="col-span-11">{email}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="col-span-11">{phone}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </div>
        <div className="col-span-11">{github}</div>
        <div>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="h-6 w-6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>github</title>
              <rect width="24" height="24" fill="none"></rect>
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
            </g>
          </svg>
        </div>
        <div className="col-span-11">{code_pen}</div>
        <div>
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>codepen</title>
              <path d="M8.333 14.668v2.663l1.989-1.332zM15.204 12.735v-3.711l-6.235 4.156 2.785 1.863zM23.031 13.18l-6.235-4.156v3.711l3.449 2.309zM8.969 18.82l6.235 4.156v-3.711l-3.449-2.307zM16.796 19.265v3.713l6.235-4.156-2.785-1.863zM16 14.118l-2.814 1.882 2.814 1.884 2.814-1.884zM16 1.025c-8.271 0-14.975 6.705-14.975 14.975s6.705 14.975 14.975 14.975c8.271 0 14.975-6.705 14.975-14.975v0c0-0 0-0 0-0 0-8.271-6.705-14.975-14.975-14.975-0 0-0 0-0 0h0zM25.26 18.822c-0 0.037-0.003 0.073-0.008 0.108l0-0.004-0.006 0.035-0.014 0.066-0.012 0.039c-0.007 0.024-0.014 0.043-0.023 0.062l0.001-0.004-0.017 0.037-0.026 0.054-0.024 0.037c-0.030 0.047-0.063 0.088-0.1 0.125l-0 0-0.032 0.031-0.045 0.037-0.036 0.027-0.012 0.010-8.464 5.643c-0.124 0.084-0.277 0.134-0.442 0.134s-0.318-0.050-0.445-0.136l0.003 0.002-8.476-5.654c-0.030-0.021-0.057-0.042-0.082-0.065l0 0-0.032-0.031-0.040-0.042-0.026-0.035c-0.031-0.040-0.059-0.085-0.082-0.133l-0.002-0.004-0.017-0.039-0.021-0.059-0.012-0.037c-0.005-0.018-0.009-0.041-0.012-0.064l-0-0.003-0.007-0.035c-0.005-0.031-0.007-0.067-0.008-0.103v-5.642c0-0.037 0.003-0.072 0.008-0.108l-0 0.004 0.006-0.034 0.014-0.067 0.012-0.037c0.032-0.105 0.083-0.195 0.15-0.272l-0.001 0.001 0.039-0.042 0.032-0.031c0.024-0.022 0.051-0.044 0.079-0.063l0.002-0.002 0.012-0.010 8.463-5.642c0.124-0.084 0.277-0.134 0.442-0.134s0.318 0.050 0.445 0.136l-0.003-0.002 8.557 5.717 0.032 0.031c0.037 0.037 0.070 0.078 0.098 0.122l0.002 0.003 0.024 0.037 0.026 0.054 0.017 0.037c0.009 0.020 0.015 0.040 0.021 0.059l0.012 0.039c0.005 0.018 0.009 0.041 0.012 0.064l0 0.003 0.007 0.034c0.005 0.031 0.007 0.067 0.007 0.103v0zM23.667 17.332v-2.663l-1.989 1.332z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const me = await client.fetch(query.aboutMe);
  return {
    props: {
      me,
    },
  };
}
