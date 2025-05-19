import IPaymentRepository from './repository.js';
import { BadRequest, ItemNotFound, InternalServerError, NotFound } from '../../utills/status/error.js';
// import MyEnvironment from '../../core/environment.js';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
class PaymentController {

  // ========== GET ========== // 
  async Getwebhook(req, res) {
    try {
      dayjs.extend(utc);
      const payload = req.body;
      const data = payload.data;
      const eventType = payload.event_type;
      if (eventType === 'subscription.created') {
        await IPaymentRepository.add({
          id: uuidv4(),
          user_id: data.custom_data?.user_id,
          customer_id: data.customer_id,
          subscription_id: data.id,
          first_billed_at: dayjs.utc(data.billing_period.starts_at).add(55, 'minute').format('YYYY-MM-DD HH:mm:ss'),
          next_billed_at: dayjs.utc(data.billing_period.ends_at).add(55, 'minute').format('YYYY-MM-DD HH:mm:ss'),
          billing_interval: data.billing_cycle?.interval || 'month',
          status: data.items?.[0]?.price?.status,
        });
      }

      if (eventType === 'transaction.completed') {
        const payment = data.payments?.[0];
        if (payment?.status === 'captured') {
          await IPaymentRepository.add({
            id: uuidv4(),
            user_id: data.custom_data?.user_id,
            customer_id: data.customer_id,
            subscription_id: data.subscription_id,
            first_billed_at: dayjs.utc(data.billing_period.starts_at).add(55, 'minute').format('YYYY-MM-DD HH:mm:ss'),
            next_billed_at: dayjs.utc(data.billing_period.ends_at).add(55, 'minute').format('YYYY-MM-DD HH:mm:ss'),
            billing_interval:
              data.items?.[0]?.price?.billing_cycle?.interval || 'month',
            status: data.items?.[0]?.price?.status,
          });
        }
      }

      return res.status(200).json({ message: 'Webhook received', data: eventType });
    } catch (error) {
      console.error('Webhook error:', error);
      return res.status(500).json({ message: 'Webhook processing failed' });
    }
  }




  async Gets(req, res) {
    try {
      const response = await fetch('https://sandbox-api.paddle.com/subscriptions/sub_01jv1y954kzpbann5405hwwg18', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer pdl_sdbx_apikey_01jv1w5sz1txhgag2z4cxwt1xn_QethEDb0znaeeKxZd35nk6_AiQ`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Paddle API error: ${response.statusText}`);
      }

      const { data } = await response.json();
      if (!data) return res.status(404).json({ message: 'No subscription data found' });

      // Extract needed fields
      const paymentData = {
        id: uuidv4(),
        user_id: data.custom_data?.user_id,
        customer_id: data.customer_id,
        subscription_id: data.id,
        first_billed_at: data.first_billed_at,
        next_billed_at: data.next_billed_at,
        billing_interval: data.billing_cycle?.interval,
        status: data.status,
      };

      const savedPayment = await IPaymentRepository.add(paymentData);
      return res.status(200).json({ message: 'Saved successfully', data: savedPayment });

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


  // ========== POST ========== // 
  async Insert(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(new BadRequest().statusCode).json({ message: new BadRequest().message });
      }

      const item = await IExampleRepository.add({ name });

      res.status(200).json(item);

    } catch (error) {
      console.error(error);
      return res.status(new InternalServerError().statusCode).json({ message: new InternalServerError().message });
    }
  }


  // ========== UPDATE ========== // 
  async Update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if (!id) {
        return res.status(new NotFound().statusCode).json({ message: new NotFound().message });
      }

      if (!name) {
        return res.status(new BadRequest().statusCode).json({ message: new BadRequest().message });
      }

      const item = await IExampleRepository.getSingle({ id });
      if (!item) {
        return res.status(new ItemNotFound().statusCode).json({ message: new ItemNotFound().message });
      }

      const updatedItem = await IExampleRepository.update(id, { name });

      return res.status(200).json(updatedItem);
    } catch (error) {
      return res.status(new InternalServerError().statusCode).json({ message: new InternalServerError().message });
    }
  }


  // ========== DELETE ========== // 
  async Delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(new BadRequest().statusCode).json({ message: new BadRequest().message });
      }

      const item = await IExampleRepository.getSingle({ id });
      if (!item) {
        return res.status(new ItemNotFound().statusCode).json({ message: new ItemNotFound().message });
      }

      await IExampleRepository.remove(id);

      return res.status(200).json({ message: 'Successfully' });
    } catch (error) {
      return res.status(new InternalServerError().statusCode).json({ message: new InternalServerError().message });
    }
  }
}

export default new PaymentController();
