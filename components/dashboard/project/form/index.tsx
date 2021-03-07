import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../../hooks/useForm';
import { RootState } from '../../../../models/interfaces/common';
import { handleOnSubmit } from '../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../common';
import { Button, Form } from '../../../ui';

interface Props { }

const ProjectForm: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: {
      projectFormErrors,
      isButtonLoading: { addProject },
    },
    signIn: { user: { uid } },
  } = useSelector((state: RootState) => state);

  const { data, handleOnChange } = useForm({
    name: '',
    description: '',
    githubRepositoryLink: '',
    uid,
  });

  const { name, description, githubRepositoryLink } = data;

  return (
    <Modal>
      <Form onSubmit={(e) => dispatch(handleOnSubmit({ e, data, type: 'project' }))}>
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
          disabled={addProject}
          loading={addProject ? 'true' : 'false'}
        >
          Create project
        </Button>
      </Form>
    </Modal>
  );
}

export default ProjectForm;