import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  background-color: white;

  height: 100vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 22rem;

  margin-top: 3rem;
`;

export const Input = styled.input`
  background-color: inherit;
  border-color: 1px;

  width: 100%;
  height: 1.75rem;
  padding: 0.375rem 0.75rem;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-color: darkgray;
  outline-color: #6b6b6b;
`;

export const AddButton = styled.button`
  &:hover {
    background-color: #ced4da;
    border-color: #6b6b6b;
    cursor: pointer;
  }

  width: 30%;
  height: 2.65rem;
  padding: 0.375rem 0.75rem;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  background-color: #e9ecef;
  background-clip: padding-box;
  border: 1px solid #ced4da;

  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-color: darkgray;
`;

export const BoxList = styled.div``;

export const List = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Checkbox = styled.input``;

export const EditIcon = styled.img`
  margin-left: auto;

  height: 50%;
  visibility: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemList = styled.li`
  width: 21rem;
  height: 2rem;
  padding: 0.15rem 0.5rem;

  display: flex;
  gap: 0.25rem;

  align-items: center;

  font-size: 1rem;
  line-height: 1.5;
  color: #495057;

  background-color: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;

  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-color: darkgray;

  &:hover {
    ${EditIcon} {
      visibility: visible;
    }
  }
`;

export const InputEdit = styled.input``;
