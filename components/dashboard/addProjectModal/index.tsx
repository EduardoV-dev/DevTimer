import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAddProject from '../../../hooks/useAddProject';
import { RootState } from '../../../models/interfaces/general';
import { handleModal } from '../../../utils/ui';
import { Backdrop, FormGroup } from '../../common';
import { Button, Container, Form, P } from '../../ui';
import s from './addProjectModal.module.scss';

interface Props { }

const AddProjectModal: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const {
    ui: {
      isModalDisplayed,
      isAddProjectButtonLoading
    },
    dashboard: { projectErrors },
    auth: { user: { uid } },
  } = useSelector((state: RootState) => state);
  const { projectData, handleOnChange, handleOnSubmit } = useAddProject({
    name: '',
    description: '',
    githubRepositoryLink: '',
    userId: uid,
  });

  const { name, description, githubRepositoryLink } = projectData;

  return (
    <>
      {isModalDisplayed && (
        <>
          <Backdrop onClick={() => handleModal(false, dispatch)} />
          <Container
            bgColor={({ theme }) => theme.light}
            className={s.addProjectModal}
          >
            <Form onSubmit={handleOnSubmit}>
              <FormGroup
                type='input'
                componentType='input'
                labelText='Project name'
                placeholder='Name your project'
                name='name'
                value={name}
                onChange={handleOnChange}
                error={projectErrors.name}
              />

              <FormGroup
                componentType='textarea'
                labelText='Project description'
                placeholder='Add a description that describes your project'
                name='description'
                value={description}
                onChange={handleOnChange}
                error={projectErrors.description}
              />
              <FormGroup
                componentType='input'
                labelText='Github repository link (Optional)'
                placeholder='Add your link'
                name='githubRepositoryLink'
                value={githubRepositoryLink}
                onChange={handleOnChange}
                error={projectErrors.githubRepositoryLink}
              />
              <Button
                type='submit'
                primary='true'
                disabled={isAddProjectButtonLoading}
                loading={isAddProjectButtonLoading ? 'true' : 'false'}
              >
                Create project
              </Button>
            </Form>
          </Container>
        </>
      )}
    </>
  );
}

export default AddProjectModal;