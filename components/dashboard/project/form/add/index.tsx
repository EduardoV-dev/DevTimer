import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../../../hooks/useForm';
import { RootState } from '../../../../../models/interfaces/common';
import { Project } from '../../../../../models/interfaces/dashboard';
import { handleCreateProject } from '../../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../../common';
import { Button, Form } from '../../../../ui';

interface Props { }

const ProjectAddForm: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    signIn: { user },
    dashboard: {
      projectFormErrors,
      isButtonLoading: {
        project,
      },
    },
  } = useSelector((state: RootState) => state);

  if (!user) return null;

  const { data, handleOnChange, clearInputs } = useForm<Project>({
    name: '',
    description: '',
    githubRepositoryLink: '',
    uid: user.uid,
  })

  const { name, description, githubRepositoryLink } = data;
  
  return (
    <Modal type='project' action='add'>
      <Form
        onSubmit={e => dispatch(handleCreateProject({ e, data, clearInputs }))}
      >
        <FormGroup
          type='input'
          componentType='input'
          labelText='Project name'
          placeholder='Name your project'
          name='name'
          value={name}
          onChange={handleOnChange}
          error={projectFormErrors.name}
          autoFocus
        />
        <FormGroup
          componentType='textarea'
          labelText='Project description'
          placeholder='Add a description that describes your project'
          name='description'
          value={description}
          onChange={handleOnChange}
          error={projectFormErrors.description}
        />
        <FormGroup
          componentType='input'
          labelText='Github repository link (Optional)'
          placeholder='Add your link'
          name='githubRepositoryLink'
          value={githubRepositoryLink}
          onChange={handleOnChange}
          error={projectFormErrors.githubRepositoryLink}
        />
        <Button
          type='submit'
          primary='true'
          disabled={project}
          loading={project ? 'true' : 'false'}
        >
          Create project
        </Button>
      </Form>
    </Modal>
  );
}

export default ProjectAddForm;