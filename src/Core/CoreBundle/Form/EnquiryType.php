<?php

namespace Core\CoreBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class EnquiryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', 'text', array(
            'attr' => array('placeholder' => 'Naam'), 'label' => false));
        $builder->add('email', 'email', array(
            'attr' => array('placeholder' => 'Email'), 'label' => false));
        $builder->add('subject', 'text', array(
            'attr' => array('placeholder' => 'Onderwerp'), 'label' => false));
        $builder->add('body', 'textarea', array(
            'attr' => array('placeholder' => 'Bericht'), 'label' => false));

    }

    public function getName()
    {
        return 'contact';
    }
}