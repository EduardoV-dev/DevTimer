import React from 'react';
import { Dispatch } from 'redux';
import { Project, ProjectFormErrors } from '../../../../models/interfaces/dashboard';
import { FormAction } from '../../../../models/types/common';
import { OnChange } from '../../../../models/types/events';
import { handleOnSubmit } from '../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../common';
import { withProjectForm } from '../../../hoc';
import { Button, Form } from '../../../ui';

interface Props {
  data: Project,
  handleOnChange: (e: OnChange) => void;
  clearInputs: () => void;
  projectFormErrors: ProjectFormErrors;
  addProject: boolean;
  dispatch: Dispatch<any>;
  formAction: FormAction;
}

const ProjectForm: React.FC<Props> = ({
  data,
  handleOnChange,
  clearInputs,
  projectFormErrors,
  addProject,
  dispatch,
  formAction,
}): JSX.Element => {
  const { name, description, githubRepositoryLink } = data;

  return (
    <Modal type='project' action={formAction}>
      <Form onSubmit={(e) => dispatch(handleOnSubmit({
        e,
        data,
        type: 'project',
        clearInputs,
        formAction,
      }))}>
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
          {formAction === 'add' ? 'Create project' : 'Edit project'}
        </Button>
      </Form>
    </Modal>
  );
}

export default withProjectForm(ProjectForm);