import {Avatar, Box, Modal, Typography} from '@mui/material';
import React, {useState} from 'react';


type CharactersPhotoPropsType = {
    imgURL: string,
}

export const CharactersPhoto = ({imgURL}: CharactersPhotoPropsType) => {

    const [isShowModal, setIsShowModal] = useState(false)

    const statusModalHandle = () => {
        setIsShowModal(!isShowModal)
    }

    return (
        <>
            <Avatar src={imgURL} onClick={statusModalHandle}/>
            {isShowModal && <Modal
                open={isShowModal}
                onClose={statusModalHandle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    bgcolor: 'white',
                    top: '25%',
                    left: '50%'
                }}
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Character Photo
                    </Typography>
                    <img src={imgURL} alt={'character-photo'}/>
                </Box>
            </Modal>
            }
        </>
    )
}