import logo from "../assets/images/logo.svg";
import IconText from "../components/shared/IconText"
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import Textinput from "../components/shared/Textinput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { colorSpace } from "@cloudinary/url-gen/actions/delivery";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";




const UploadAudiobook = () => {
    const [name, setName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [playlistUrl, setPlaylistUrl] = useState("")
    const [uploadedAudiobookFileName, setUploadedAudiobookFileName] = useState("")
    const navigate = useNavigate()

    const submitAudiobook = async () => {
        console.log(name)
        console.log(thumbnail)
        console.log(playlistUrl)
        //to send data in /audiobook/create api
        const data = { name, thumbnail, track: playlistUrl }
        const response = await makeAuthenticatedPOSTRequest("/audiobook/create", data)
        if (response.err) {
            alert("could not create audiobook")
            return
        }
        alert("success")
        navigate("/home")
        console.log(response)
    }
    return (
        <div className="h-full w-full flex">
            {/* This first div will be the left pannel */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-6">
                <div>
                    {/* div for logo */}
                    <div className="logoDiv p-4 mt-3">
                        <div className="space-x-3 flex text-2xl items-center px-3 font-bold text-white">
                            <Icon icon="solar:headphones-round-sound-bold" className="text-white" height={40} width={40} /><div>Listenify</div>
                        </div>
                    </div>
                    <div>
                        <IconText
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                        />

                        <IconText
                            iconName={"ic:sharp-search"}
                            displayText={"Search"}
                        />

                        <IconText
                            iconName={"icomoon-free:books"}
                            displayText={"Library"}
                        />

                        <IconText
                            iconName={"entypo:music"}
                            displayText={"My Music"}
                            navigate={'/mymusic'}
                        />
                    </div>

                    <div className="pt-6">
                        <IconText
                            iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
                        />
                        <IconText
                            iconName={"mdi:heart-box"}
                            displayText={"Liked Audiobooks"}
                        />
                    </div>



                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div>

            </div>

            {/* This second div will be the right part (main conent) */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar h-1/10 w-full bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextWithHover displayText={"Primium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border border-white"></div>
                        </div>

                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Audiobook"} />
                            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">SB</div>
                        </div>

                    </div>


                </div>
                {/* beacuse of overflow auto we see scroll data which is Spotify Playlist and Sound Of India .The overflow-auto is if my text is goes for scroll in website then put scrollbar and apply desird css*/}
                <div className="content p-8 pt-0 overflow-auto"></div>
                {/* //form */}
                <div className="text-2xl p-8 pt-0 overflow-hidden text-whit">
                    <div className="text-2xl mb-5 font-semibold text-white mt-8">
                        Upload Your Content Of bokk
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                            <Textinput label="Name"
                                labelClassName={"text-white"}
                                placeholder={"Name"}
                                value={name}
                                setValue={setName} />
                        </div>
                        <div className="w-1/2">
                            <Textinput label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder={"Thumbanil"}
                                value={thumbnail}
                                setValue={setThumbnail} />
                        </div>

                    </div>
                    <div className="py-3">
                        {
                            uploadedAudiobookFileName ? (
                                <div className="bg-white rounded-full p-3 w-1/3">
                                    {uploadedAudiobookFileName.substring(0, 35)}...
                                </div>
                            ) : (
                                <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedAudiobookFileName} />
                            )


                        }

                    </div>
                    <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer text-lg" onClick={submitAudiobook}>
                        Submit Audiobook
                    </div>



                </div>

            </div>
        </div>
    )
};


export default UploadAudiobook;