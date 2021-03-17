import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../../../hooks/useForm';
import { RootState } from '../../../../../models/interfaces/common';
import { Project } from '../../../../../models/interfaces/dashboard';
import { handleEditProject } from '../../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../../common';
import { Button, Form } from '../../../../ui';

interface Props { }

const ProjectEditForm: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: {
      projectFormErrors,
      isButtonLoading: {
        project,
      },
      selectedProject,
    },
    ui: {
      isModalDisplayed: {
        project: { edit },
      }
    },
  } = useSelector((state: RootState) => state);

  const { data, handleOnChange, clearInputs, setData } = useForm<Project>({
    name: '',
    description: '',
    githubRepositoryLink: '',
    uid: selectedProject.uid,
    id: selectedProject.id,
  });

  const { name, description, githubRepositoryLink } = data;

  useEffect(() => edit && setData({ ...selectedProject }), [edit]);

  return (
    <Modal type='project' action='edit'>
      <Form
        onSubmit={e => dispatch(handleEditProject({ e, data, clearInputs }))}
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
          Edit project
        </Button>
      </Form>
    </Modal>
  );
}

export default ProjectEditForm;